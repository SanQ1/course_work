const prisma = require('../lib/prisma');

class AnalyticsRepository {
  async getCategoryPerformanceReport(minRevenue) {
    return await prisma.$queryRaw`
      WITH CategoryStats AS (
        SELECT 
          c.name AS category_name,
          COUNT(DISTINCT o.orderid) AS total_orders,
          SUM(oi.quantity * p.cost_for_one) AS total_revenue,
          AVG(oi.quantity * p.cost_for_one) AS avg_item_value
        FROM category c
        JOIN category_product cp ON c.categoryid = cp.categoryid
        JOIN product p ON cp.productid = p.productid
        JOIN order_item oi ON p.productid = oi.productid
        JOIN "order" o ON oi.orderid = o.orderid
        GROUP BY c.name
      )
      SELECT * FROM CategoryStats
      WHERE total_revenue > ${minRevenue}
      ORDER BY total_revenue DESC;
    `;
  }
}

module.exports = {AnalyticsRepository};
