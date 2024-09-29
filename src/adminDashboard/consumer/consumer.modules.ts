import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Consumer, consumerSchema } from "src/models/consumers/consumer.schema";



@Module({
  imports : [
    MongooseModule.forFeature([
      { name : Consumer.name , schema : consumerSchema}
    ])
  ],
  controllers : ,
  providers : ,
  exports : 
})

export class ConsumerModule {}