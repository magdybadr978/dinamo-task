import { Injectable } from "@nestjs/common";
import { Types } from "mongoose";
import { ConsumerRepository } from "src/models/consumers/consumer.repository";
import { Consumer } from "src/models/consumers/consumer.schema";


@Injectable()
export class consumerService {
  constructor(private readonly consumerRepository : ConsumerRepository) {}
    // Create a new Consumer
    async createConsumer(name : string , phone : string , password : string): Promise<Consumer>{
      return this.consumerRepository.create({name ,phone , password})
    }

    // Get all Consumers
    async getAllConsumers(){
      return this.consumerRepository.getAll({});
    }

    // Get a consumer by id
    async getConsumerById(id : string){
      return this.consumerRepository.getOne({_id : new Types.ObjectId(id)});
    }

    // Update Consumer data by Id
    async updateConsumer(id : string , newName : string , newPhone : string , newPassword : string){
      return this.consumerRepository.update(
        { _id : new Types.ObjectId(id)},
        { name : newName , phone :newPhone , password : newPassword},
        { new : true }
      );
    }
    
    // Delete Consumer data by Id
    async deleteConsumer(id : string){
      return this.consumerRepository.delete({_id : new Types.ObjectId(id)})
    }

    
}