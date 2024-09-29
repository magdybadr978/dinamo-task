import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async createCategory(@Body('name') name: string) {
    return this.categoryService.createCategory(name);
  }

  @Get()
  async getAllCategories() {
    return this.categoryService.getAllCategories();
  }

  @Get(':id')
  async getCategoryByName(@Param('id') id: string) {
    return this.categoryService.getCategoryById(id);
  }

  @Put(':id')
  async updateCategory(
    @Param('id') id: string,
    @Body('newName') newName: string,
  ) {
    return this.categoryService.updateCategory(id, newName);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: string) {
    return this.categoryService.deleteCategory(id);
  }
}
