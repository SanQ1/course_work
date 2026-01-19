const prisma = require('../lib/prisma');

const { CustomerRepository } = require('../repositories/customer_repository');

class CustomerService {
  constructor() {
    this.customerRepo = new CustomerRepository();
  }

  async deleteCustomerProfile(customerId) {
    return await prisma.$transaction(async (tx) => {
      
      const customer = await this.customerRepo.findActiveById(customerId, tx);

      if (!customer) {
        throw new Error("Клієнта не знайдено або він уже був видалений");
      }

      const orders = await tx.order.findMany({
        where: {
          customerid: customerId
        }
      });

      if (orders.length > 0) {
        throw new Error("Неможливо видалити клієнта з активними замовленнями");
      }

      await this.customerRepo.softDelete(customerId, tx);

      return {
        success: true,
        message: `Профіль клієнта ${customer.email} успішно деактивовано`
      };
    });
  }
}

module.exports = {CustomerRepository};
