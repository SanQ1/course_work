const prisma = require('../src/lib/prisma');
const { OrderService } = require('../src/services/order_service');

const orderService = new OrderService();

describe('Failure Scenarios & Error Handling', () => {

  beforeEach(async () => {
    await prisma.order_item.deleteMany();
    await prisma.order.deleteMany();
    await prisma.product.deleteMany();
    await prisma.customer.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  test('Should fail to place order if product does not exist', async () => {
    const customer = await prisma.customer.create({
	    data: { name: 'Faulty', surname: 'User', email: 'fault@test.com', phone_number: '0963859399' }
    });

    const items = [{ productid: 999999, quantity: 1 }]; 

    await expect(orderService.placeOrder(customer.customerid, 'Addr', items))
      .rejects
      .toThrow(/не знайдено/); 
  });

  test('Should rollback order creation if one item is out of stock', async () => {
    const customer = await prisma.customer.create({
	    data: { name: 'Stock', surname: 'Tester', email: 'stock@test.com', phone_number: '0963829590' }
    });

    const product = await prisma.product.create({
	    data: { name: 'Limited Item', cost_for_one: 10, quantity: 5, desctiption: '' }
    });

    const items = [{ productid: product.productid, quantity: 10 }];

    await expect(orderService.placeOrder(customer.customerid, 'Addr', items))
      .rejects
      .toThrow(/Недостатньо товару/);

    const ordersCount = await prisma.order.count();
    expect(ordersCount).toBe(0);

    const sameProduct = await prisma.product.findUnique({
      where: { productid: product.productid }
    });
    expect(sameProduct.quantity).toBe(5);
  });
});
