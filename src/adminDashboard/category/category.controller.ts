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

  @Post('add')
  async createCategory(@Body() body : {name : string , description :string}) {
    return this.categoryService.createCategory(body.name,body.description);
  }

  @Get('getAll')
  async getAllCategories() {
    return this.categoryService.getAllCategories();
  }

  @Get('getSpecific/:id')
  async getCategoryByName(@Param('id') id: string) {
    return this.categoryService.getCategoryById(id);
  }

  @Put('update/:id')
  async updateCategory(
    @Param('id') id: string,
    @Body() body : {newName : string , newDescription : string},
  ) {
    return this.categoryService.updateCategory(id,body.newName,body.newDescription);
  }

  @Delete('delete/:id')
  async deleteCategory(@Param('id') id: string) {
    return this.categoryService.deleteCategory(id);
  }
}
