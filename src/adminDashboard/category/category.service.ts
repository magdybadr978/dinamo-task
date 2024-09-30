import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { Types } from 'mongoose';
import { CategoryRepository } from 'src/models/category/category.repository';
import { Category } from 'src/models/category/category.schema';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  // Create a new category
  async createCategory(createCategoryDTO: {name: string,description: string}): Promise<Category> {
    const category = await this.categoryRepository.create(createCategoryDTO);
    if(!category) throw new HttpException("three is error",400)
    return category;
  }

  // Get all categories
  async getAllCategories() {
    const categories = await this.categoryRepository.getAll({});
    if(categories.length == 0) throw new NotFoundException("There is no Categories")
    return {categories}
  }

  // Get a category by id
  async getCategoryById(id: string): Promise<{ message: string }> {
    const category = await this.categoryRepository.getOne({
      _id: new Types.ObjectId(id),
    });
    if (!category) throw new NotFoundException('category not found');

    return { message: `get category by this id : ${id}` };
  }

  // Update a category by id
  async updateCategory(
    id: string,
    updateCategoryDTO: { name: string; description: String },
  ) {
    return this.categoryRepository.update(
      { _id: new Types.ObjectId(id) },
      updateCategoryDTO,
      { new: true },
    );
  }

  // Delete a category by id
  async deleteCategory(id: string): Promise<{ message: string }> {
    const category = await this.categoryRepository.delete({
      _id: new Types.ObjectId(id),
    });
    if (category.deletedCount == 0) {
      throw new NotFoundException('category not found');
    }
    return { message: 'Deleted Category successfully' };
  }
}
