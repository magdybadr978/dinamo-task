import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Category, categorySchema } from 'src/models/category/category.schema';
import { CategoryRepository } from 'src/models/category/category.repository';

@Module({
  imports: [
    // MongooseModule is used to inject the Category model into the repository
    MongooseModule.forFeature([
      { name: Category.name, schema: categorySchema },
    ]),
  ],
  controllers: [CategoryController], // Attach the CategoryController
  providers: [CategoryService, CategoryRepository], // Attach the CategoryService and CategoryRepository
  exports: [CategoryService, CategoryRepository], // Optionally export the service and repository if other modules need it
})
export class CategoryModule {}
