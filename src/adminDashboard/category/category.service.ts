import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { CategoryRepository } from 'src/models/category/category.repository';
import { Category } from 'src/models/category/category.schema';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  // Create a new category
  async createCategory(name: string,description : string): Promise<Category> {
    return this.categoryRepository.create({ name,description });
  }

  // Get all categories
  async getAllCategories() {
    return this.categoryRepository.getAll({});
  }

  // Get a category by id
  async getCategoryById(id: string) {
    return this.categoryRepository.getOne({ _id: new Types.ObjectId(id) });
  }

  // Update a category by id
  async updateCategory(id: string, newName: string , newDescription : String) {
    return this.categoryRepository.update(
      { _id: new Types.ObjectId(id) },
      { name: newName , description : newDescription },
      { new: true },
    );
  }

  // Delete a category by id
  async deleteCategory(id: string) {
    return this.categoryRepository.delete({ _id: new Types.ObjectId(id) });
  }
}
