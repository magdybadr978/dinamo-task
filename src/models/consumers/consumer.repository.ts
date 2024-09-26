import { Document, Model } from 'mongoose';
import { AbstractRepository } from '../abstract.repository';
import { Consumer } from './consumer.schema';
import { InjectModel } from '@nestjs/mongoose';

export class ConsumerRepository extends AbstractRepository<Consumer> {
  constructor(@InjectModel(Consumer.name) private consumerModel: Model<Consumer & Document>) {
    super(consumerModel);
  }
}
