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

@Controller('dashboard-admin/consumer')
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
    return await this.consumerService.createConsumer(createConsumerDTO);
  }

  @Get('getAll')
  async getAllConsumers() {
    return await this.consumerService.getAllConsumers();
  }

  @Get('getSpecific/:id')
  async getSpecificConsumer(@Param('id') id: string) {
    return await this.consumerService.getConsumerById(id);
  }

  @Put('updateConsumer/:id')
  async updateConsumer(
    @Param('id') id: string,
    @Body()
    updateConsumerDTO: {
      name: string;
      phone: string;
      password: string;
    },
  ) {
    return this.consumerService.updateConsumer(
      id,
      updateConsumerDTO.name,
      updateConsumerDTO.phone,
      updateConsumerDTO.password,
    );
  }

  @Delete('deleteConsumer/:id')
  async deleteConsumer(@Param('id') id: string) {
    return await this.consumerService.deleteConsumer(id);
  }
}
