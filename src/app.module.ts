import { Module } from '@nestjs/common';
import { AdminDashboardModule } from './adminDashboard/adminDashboard.module';
import { CategoryModule } from './adminDashboard/category/category.modules';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/dinamoDB'),
    AdminDashboardModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
