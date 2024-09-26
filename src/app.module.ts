import { Module } from '@nestjs/common';
import { AdminDashboardModule } from './adminDashboard/adminDashboard.module';

@Module({
  imports: [AdminDashboardModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
