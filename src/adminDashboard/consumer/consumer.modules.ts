import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Consumer, consumerSchema } from "src/models/consumers/consumer.schema";
import { ConsumerController } from "./consumer.controller";
import { consumerService } from "./consumer.service";
import { ConsumerRepository } from "src/models/consumers/consumer.repository";



@Module({
  imports : [
    MongooseModule.forFeature([
      { name : Consumer.name , schema : consumerSchema}
    ])
  ],
  controllers : [ConsumerController],
  providers : [consumerService , ConsumerRepository],
   exports : [consumerService , ConsumerRepository]
})

export class ConsumerModule {}