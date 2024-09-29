import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { consumerService } from './consumer.service';

@Controller('/daschBoard/admin')
export class ConsumerController {
  constructor(private readonly consumerService: consumerService) {}

  @Post('add')
  async createConsumer(
    @Body()
    createConsumerDTO: {
      name: string;
      phone: string;
      password: string;
    },
  ) {
    return this.consumerService.createConsumer(
      createConsumerDTO.name,
      createConsumerDTO.phone,
      createConsumerDTO.password,
    );
  }

  @Get('getAll')
  async getAllConsumers() {
    return this.consumerService.getAllConsumers();
  }

  @Get('getSpecific/:id')
  async getSpecificConsumer(@Param('id') id: string) {
    return this.consumerService.getConsumerById(id);
  }

  @Put('updateConsumer/:id')
  async updateConsumer(
    @Param('id') id: string,
    @Body()
    updateConsumerDTO: {
      newName: string;
      newPhone: string;
      newPassword: string;
    },
  ) {
    return this.consumerService.updateConsumer(
      id,
      updateConsumerDTO.newName,
      updateConsumerDTO.newPhone,
      updateConsumerDTO.newPassword,
    );
  }

  @Delete('deleteConsumer/:id')
  async deleteConsumer(@Param('id') id: string) {
    return this.consumerService.deleteConsumer(id);
  }
}
