const prisma = require('../lib/prisma');

class OrderRepository {
  async findCustomerOrders(customerId, status = 'pending') {
    return prisma.order.findMany({
      where: {
        customerid: customerId,
      status: status 
      },
      include: {
        customer: true 
      },
      orderBy: {
        created_at: 'desc'
      }
    });
  }

  async create(data, tx) {
    return tx.order.create({ data });
  }

  async findWithItems(orderId, tx) {
    return tx.order.findUnique({
      where: { orderid: orderId },
      include: {
        order_item: { include: { product: true } }
      }
    });
  }

  async findById(orderId, tx) {
    return tx.order.findUnique({
      where: { orderid: orderId }
    });
  }

  async updateStatus(orderId, status, tx) {
    return tx.order.update({
      where: { orderid: orderId },
      data: { status }
    });
  }
}

module.exports = {OrderRepository};
