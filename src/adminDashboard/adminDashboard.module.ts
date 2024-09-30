import { Module } from '@nestjs/common';
import { ConsumerModule } from './consumer/consumer.modules';
import { CategoryModule } from './category/category.modules';

@Module({
  imports: [ConsumerModule,CategoryModule],
  controllers: [],
  providers: [],
})
export class AdminDashboardModule {}
