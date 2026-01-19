const prisma = require('../lib/prisma');

class OrderService {
  constructor() {
    const { OrderRepository } = require('../repositories/order_repository');
    this.orderRepo = new OrderRepository();

    const { ProductRepository } = require('../repositories/product_repository');
    this.productRepo = new ProductRepository();

    const { OrderItemRepository } = require('../repositories/order_item_repository');
    this.itemRepo = new OrderItemRepository();
  }

  async placeOrder(customerId, address, items) {
    if (items.length === 0) throw new Error("Замовлення порожнє");

    return await prisma.$transaction(async (tx) => {
      
      for (const item of items) {
        const product = await this.productRepo.findById(item.productid, tx);
        
        if (!product) {
          throw new Error(`Товар ${item.productid} не знайдено`);
        }
        
        if (product.quantity < item.quantity) {
          throw new Error(`Недостатньо товару "${product.name}" на складі`);
        }
      }

      const order = await this.orderRepo.create({ customerid: customerId, address }, tx);

      await this.itemRepo.createMany(order.orderid, items, tx);

      for (const item of items) {
        await this.productRepo.decrementStock(item.productid, item.quantity, tx);
      }

      return await this.orderRepo.findWithItems(order.orderid, tx);
    });
  }
}

module.exports = {OrderService};
