import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { ConsumerRepository } from 'src/models/consumers/consumer.repository';
import { Consumer } from 'src/models/consumers/consumer.schema';

@Injectable()
export class consumerService {
  constructor(private readonly consumerRepository: ConsumerRepository) {}
  // Create a new Consumer
  async createConsumer(createConsumerDTO: {
    name: string,
    phone: string,
    password: string,
  }): Promise<Consumer> {
    return await this.consumerRepository.create(createConsumerDTO);
  }

  // Get all Consumers
  async getAllConsumers() {
    return await this.consumerRepository.getAll({});
  }

  // Get a consumer by id
  async getConsumerById(id: string) {
    return await this.consumerRepository.getOne({ _id: new Types.ObjectId(id) });
  }

  // Update Consumer data by Id
  async updateConsumer(
    id : string,
    updateConsumerDTO : {name: string,phone: string,password: string}
  ) {
    return this.consumerRepository.update(
      { _id: new Types.ObjectId(id) },
      updateConsumerDTO,
      { new: true },
    );
  }

  // Delete Consumer data by Id
  async deleteConsumer(id: string) {
    return await this.consumerRepository.delete({ _id: new Types.ObjectId(id) });
  }
}
