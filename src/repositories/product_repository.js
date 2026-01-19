const prisma = require('../lib/prisma');

class ProductRepository {
  async findById(id, tx) {
    return tx.product.findUnique({ where: { productid: id } });
  }

  async decrementStock(id, quantity, tx) {
    return tx.product.update({
      where: { productid: id },
      data: { quantity: { decrement: quantity } }
    });
  }

  async incrementStock(id, quantity, tx) {
    return tx.product.update({
      where: { productid: id },
      data: { quantity: { increment: quantity } }
    });
  }

  async findByCategory(categoryId, page = 1, limit = 10) {
    return prisma.product.findMany({
      where: {
        category_product: {
          some: { categoryid: categoryId }
        }
      },
      orderBy: {
        cost_for_one: 'desc'
      },
      take: limit,
      skip: (page - 1) * limit
    });
  }
}

module.exports = {ProductRepository};
