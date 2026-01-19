-- CreateTable
CREATE TABLE "customer" (
    "customerid" SERIAL NOT NULL,
    "name" VARCHAR(32) NOT NULL,
    "surname" VARCHAR(32) NOT NULL,
    "phone_number" VARCHAR(32) NOT NULL,
    "email" VARCHAR(256) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "customer_pkey" PRIMARY KEY ("customerid")
);

-- CreateTable
CREATE TABLE "order" (
    "orderid" SERIAL NOT NULL,
    "customerid" INTEGER NOT NULL,
    "address" VARCHAR(256) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "order_pkey" PRIMARY KEY ("orderid")
);

-- CreateTable
CREATE TABLE "order_item" (
    "productid" INTEGER NOT NULL,
    "orderid" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "order_item_pkey" PRIMARY KEY ("productid","orderid")
);

-- CreateTable
CREATE TABLE "product" (
    "productid" SERIAL NOT NULL,
    "name" VARCHAR(32) NOT NULL,
    "cost_for_one" DECIMAL(10,2) NOT NULL,
    "desctiption" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("productid")
);

-- CreateTable
CREATE TABLE "category" (
    "categoryid" SERIAL NOT NULL,
    "name" VARCHAR(32) NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("categoryid")
);

-- CreateTable
CREATE TABLE "category_product" (
    "productid" INTEGER NOT NULL,
    "categoryid" INTEGER NOT NULL,

    CONSTRAINT "category_product_pkey" PRIMARY KEY ("productid","categoryid")
);

-- CreateTable
CREATE TABLE "review" (
    "customerid" INTEGER NOT NULL,
    "productid" INTEGER NOT NULL,
    "review" TEXT NOT NULL,

    CONSTRAINT "review_pkey" PRIMARY KEY ("productid","customerid")
);

-- CreateIndex
CREATE INDEX "customer_email_idx" ON "customer"("email");

-- CreateIndex
CREATE INDEX "product_name_idx" ON "product"("name");

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_customerid_fkey" FOREIGN KEY ("customerid") REFERENCES "customer"("customerid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_item" ADD CONSTRAINT "order_item_productid_fkey" FOREIGN KEY ("productid") REFERENCES "product"("productid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_item" ADD CONSTRAINT "order_item_orderid_fkey" FOREIGN KEY ("orderid") REFERENCES "order"("orderid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "category_product" ADD CONSTRAINT "category_product_productid_fkey" FOREIGN KEY ("productid") REFERENCES "product"("productid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "category_product" ADD CONSTRAINT "category_product_categoryid_fkey" FOREIGN KEY ("categoryid") REFERENCES "category"("categoryid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_productid_fkey" FOREIGN KEY ("productid") REFERENCES "product"("productid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_customerid_fkey" FOREIGN KEY ("customerid") REFERENCES "customer"("customerid") ON DELETE NO ACTION ON UPDATE NO ACTION;
