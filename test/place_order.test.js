const prisma = require('../src/lib/prisma');
const { OrderService } = require('../src/services/order_service');

const orderService = new OrderService();

describe('Order Integration Tests (Place Order)', () => {
  
  beforeEach(async () => {
    await prisma.order_item.deleteMany();
    await prisma.order.deleteMany();
    await prisma.product.deleteMany();
    await prisma.customer.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  test('Should successfully create an order and update inventory (Transaction Success)', async () => {
    const customer = await prisma.customer.create({
	    data: { name: 'Ivan', surname: 'Test', email: 'ivan@test.com', phone_number: '0985439623' }
    });

    const product = await prisma.product.create({
	    data: { name: 'Laptop', quantity: 10, cost_for_one: 2000.0, desctiption: "bla bla bla" }
    });

    const orderItems = [
      { productid: product.productid, quantity: 2 }
    ];

    const order = await orderService.placeOrder(customer.customerid, 'Shevchenka St, 1', orderItems);

    expect(order).toBeDefined();
    expect(order.order_item.length).toBe(1);
    
    const updatedProduct = await prisma.product.findUnique({
      where: { productid: product.productid }
    });
    expect(updatedProduct.quantity).toBe(8);
  });
});
