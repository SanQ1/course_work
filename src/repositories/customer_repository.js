const prisma = require('../lib/prisma');

class CustomerRepository {
  async findActiveById(id, tx) {
    return tx.customer.findFirst({
      where: {
        customerid: id,
        deleted_at: null
      }
    });
  }

  async softDelete(id, tx) {
    return tx.customer.update({
      where: { customerid: id },
      data: {
        deleted_at: new Date()
      }
    });
  }
}

module.exports = {CustomerRepository};
