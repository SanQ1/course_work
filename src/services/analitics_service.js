const { AnalyticsRepository } = require('../repositories/analytics_repository');

class AnalyticsService {
  constructor() {
    this.analyticsRepo = new AnalyticsRepository();
  }

  async getTopPerformingCategories() {
    const minRevenueThreshold = 1000;
    const report = await this.analyticsRepo.getCategoryPerformanceReport(minRevenueThreshold);
    
    if (!report || (report as any[]).length === 0) {
      throw new Error("Немає даних для звіту за вказаний період");
    }

    return report;
  }
}

module.exports = {AnalyticsRepository};
