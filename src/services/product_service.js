const { ProductRepository } = require('../repositories/product_repository');

class ProductService {
  constructor() {
    this.productRepo = new ProductRepository();
  }

  async getProductsByCategory(catId, page) {
    return await this.productRepo.findByCategory(catId, page);
  }
}

module.exports = {ProductRepository};
