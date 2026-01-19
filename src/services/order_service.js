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
          throw new Error(`Товар ${item.productid} не знайдено`); // Автоматичний ROLLBACK 
        }
        
        if (product.quantity < item.quantity) {
          throw new Error(`Недостатньо товару "${product.name}" на складі`); // ROLLBACK [cite: 40, 66]
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

  async cancelOrder(orderId) {
    return await prisma.$transaction(async (tx) => {
      const order = await this.orderRepo.findWithItems(orderId, tx);

      if (!order) {
        throw new Error("Замовлення не знайдено"); // [cite: 66]
      }

      if (order.status === 'cancelled') {
        throw new Error("Замовлення вже було скасовано раніше");
      }

      if (order.status === 'shipped' || order.status === 'completed') {
        throw new Error("Неможливо скасувати замовлення, яке вже відправлено або завершено");
      }

      await this.orderRepo.updateStatus(orderId, 'cancelled', tx);

      for (const item of order.order_item) {
        await this.productRepo.incrementStock(item.productid, item.quantity, tx);
      }

      return { message: "Замовлення успішно скасовано, товари повернуто на склад" };
    });
  }


  async getPendingOrders(customerId) {
    return await this.orderRepo.findCustomerOrders(customerId, 'pending');
  }
}

module.exports = {OrderService};
