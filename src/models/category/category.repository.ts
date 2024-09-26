import { Model } from 'mongoose';
import { AbstractRepository } from '../abstract.repository';
import { Category, CategoryDocument } from './category.schema';
import { InjectModel } from '@nestjs/mongoose';

export class CategoryRepository extends AbstractRepository<Category> {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {
    super(categoryModel);
  }
}
