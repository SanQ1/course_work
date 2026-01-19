const prisma = require('../src/lib/prisma');

describe('Product CRUD Operations', () => {
  
  beforeEach(async () => {
    await prisma.order_item.deleteMany();
    await prisma.product.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  test('Should CREATE and READ a product', async () => {
    const newProduct = await prisma.product.create({
      data: {
        name: 'Gaming Mouse',
        cost_for_one: 50.5,
        quantity: 100,
        desctiption: 'RGB Wired Mouse'
      }
    });

    expect(newProduct.productid).toBeDefined();
    expect(newProduct.name).toBe('Gaming Mouse');

    const foundProduct = await prisma.product.findUnique({
      where: { productid: newProduct.productid }
    });

    expect(foundProduct).not.toBeNull();
    expect(Number(foundProduct.cost_for_one)).toBe(50.5);
  });

  test('Should UPDATE a product price', async () => {
    const product = await prisma.product.create({
	    data: { name: 'Keyboard', cost_for_one: 100, quantity: 10, desctiption: "RGB Wired Keyboard" }
    });

    const updatedProduct = await prisma.product.update({
      where: { productid: product.productid },
      data: { cost_for_one: 120.99 }
    });

    expect(Number(updatedProduct.cost_for_one)).toBe(120.99);
  });

  test('Should DELETE a product', async () => {
    const product = await prisma.product.create({
	    data: { name: 'To be deleted', cost_for_one: 10, quantity: 1, desctiption: "" }
    });

    await prisma.product.delete({
      where: { productid: product.productid }
    });

    const foundAfterDelete = await prisma.product.findUnique({
      where: { productid: product.productid }
    });

    expect(foundAfterDelete).toBeNull();
  });
});
