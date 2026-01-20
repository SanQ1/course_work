const prisma = require('../src/lib/prisma');
const { AnalyticsService } = require('../src/services/analytics_service');

const analyticsService = new AnalyticsService();

describe('AnalyticsService Integration Tests', () => {

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

  test('Should return only categories with revenue above 1000', async () => {
    const customer = await prisma.customer.create({
      data: { name: 'Test', surname: 'User', email: 'example.com', phone_number: '123456789' }
    });

    const catRich = await prisma.category.create({ data: { name: 'Electronics' } });
    const prodRich = await prisma.product.create({ 
        data: { name: 'Laptop', cost_for_one: 1500, quantity: 10, desctiption: 'Expensive' } 
    });
    await prisma.category_product.create({ 
        data: { categoryid: catRich.categoryid, productid: prodRich.productid } 
    });

    const catPoor = await prisma.category.create({ data: { name: 'Books' } });
    const prodPoor = await prisma.product.create({ 
        data: { name: 'Novel', cost_for_one: 200, quantity: 10, desctiption: 'Cheap' } 
    });
    await prisma.category_product.create({ 
        data: { categoryid: catPoor.categoryid, productid: prodPoor.productid } 
    });

    const order = await prisma.order.create({
      data: { customerid: customer.customerid, address: 'Test St' }
    });

    await prisma.order_item.createMany({
      data: [
        { orderid: order.orderid, productid: prodRich.productid, quantity: 1 },
        { orderid: order.orderid, productid: prodPoor.productid, quantity: 1 }
      ]
    });

    const report = await analyticsService.getTopPerformingCategories();

    expect(report.length).toBe(1);
    expect(report[0].category_name).toBe('Electronics');
    expect(Number(report[0].total_revenue)).toBe(1500);
  });

  test('Should throw error if no categories meet the threshold', async () => {
    const cat = await prisma.category.create({ data: { name: 'Small Cat' } });
    const prod = await prisma.product.create({ 
        data: { name: 'Item', cost_for_one: 50, quantity: 10, desctiption: 'Desc' } 
    });
    await prisma.category_product.create({ data: { categoryid: cat.categoryid, productid: prod.productid } });
    
    const customer = await prisma.customer.create({
        data: { name: 'A', surname: 'B', email: 'c@d.com', phone_number: '1' }
    });
    const order = await prisma.order.create({ data: { customerid: customer.customerid, address: 'A' } });
    await prisma.order_item.create({ data: { orderid: order.orderid, productid: prod.productid, quantity: 1 } });

    await expect(analyticsService.getTopPerformingCategories())
      .rejects
      .toThrow("Немає даних для звіту за вказаний період");
  });
});
