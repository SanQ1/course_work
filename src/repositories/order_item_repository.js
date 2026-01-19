const prisma = require('../lib/prisma');

class OrderItemRepository {
  async createMany(orderId, items, tx) {
    const data = items.map(item => ({
      orderid: orderId,
      productid: item.productid,
      quantity: item.quantity
    }));
    return tx.order_item.createMany({ data });
  }
}

module.exports = {OrderItemRepository};
