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

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('add')
  async createCategory(
    @Body() createCategoryDTO: { name: string; description: string },
  ) {
    return await this.categoryService.createCategory(createCategoryDTO);
  }

  @Get('getAll')
  async getAllCategories() {
    return await this.categoryService.getAllCategories();
  }

  @Get('getSpecific/:id')
  async getCategoryByName(@Param('id') id: string) {
    return await this.categoryService.getCategoryById(id);
  }

  @Put('update/:id')
  async updateCategory(
    @Param('id') id: string,
    @Body() updateCategoryDTO: { name: string; description: string },
  ) {
    return this.categoryService.updateCategory(
      id,
      updateCategoryDTO
    );
  }

  @Delete('delete/:id')
  async deleteCategory(@Param('id') id: string) {
    return await this.categoryService.deleteCategory(id);
  }
}
