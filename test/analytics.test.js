const prisma = require('../src/lib/prisma');

describe('Analytics & Complex Queries Tests', () => {

    beforeEach(async () => {
	await prisma.order_item.deleteMany();
	await prisma.order.deleteMany();
	await prisma.category_product.deleteMany();
	await prisma.product.deleteMany();
	await prisma.category.deleteMany();
	await prisma.customer.deleteMany();
    });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  test('Should calculate total revenue and items sold correctly (Aggregation)', async () => {
    const customer = await prisma.customer.create({
	    data: { name: 'Analytics', surname: 'User', email: 'analyt@test.com', phone_number: '0983748295' }
    });

    const p1 = await prisma.product.create({
	    data: { name: 'Product A', cost_for_one: 100, quantity: 50, desctiption: '' }
    });

    const p2 = await prisma.product.create({
	    data: { name: 'Product B', cost_for_one: 200, quantity: 30, desctiption: '' }
    });

    const order1 = await prisma.order.create({
        data: { customerid: customer.customerid, address: 'Test 1' }
    });
    const order2 = await prisma.order.create({
        data: { customerid: customer.customerid, address: 'Test 2' }
    });

    await prisma.order_item.createMany({
      data: [
        { orderid: order1.orderid, productid: p1.productid, quantity: 2 }, 
        { orderid: order2.orderid, productid: p2.productid, quantity: 1 }
      ]
    });

    const analytics = await prisma.order_item.aggregate({
      _sum: {
        quantity: true
      },
      _count: {
        orderid: true
      }
    });

    expect(analytics._sum.quantity).toBe(3); 
    
    expect(analytics._count.orderid).toBe(2);
  });

  test('Should find the most expensive product on stock', async () => {
    await prisma.product.createMany({
      data: [
        { name: 'Cheap', cost_for_one: 10, quantity: 1, desctiption: '' },
        { name: 'Expensive', cost_for_one: 5000, quantity: 1, desctiption: '' },
        { name: 'Medium', cost_for_one: 500, quantity: 1, desctiption: '' }
      ]
    });

    const maxPrice = await prisma.product.aggregate({
      _max: {
        cost_for_one: true
      }
    });

    expect(Number(maxPrice._max.cost_for_one)).toBe(5000);
  });
});
