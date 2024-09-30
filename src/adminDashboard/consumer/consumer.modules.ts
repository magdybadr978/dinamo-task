import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Consumer, consumerSchema } from 'src/models/consumers/consumer.schema';
import { ConsumerController } from './consumer.controller';
import { consumerService } from './consumer.service';
import { ConsumerRepository } from 'src/models/consumers/consumer.repository';
import { User, userSchema } from 'src/models/common/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: userSchema,
        discriminators: [{ name: Consumer.name, schema: consumerSchema }],
      },
    ]),
  ],
  controllers: [ConsumerController],
  providers: [consumerService, ConsumerRepository],
  exports: [consumerService, ConsumerRepository],
})
export class ConsumerModule {}
