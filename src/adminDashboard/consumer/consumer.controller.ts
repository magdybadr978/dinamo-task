import { Controller } from "@nestjs/common";
import { Consumer } from "src/models/consumers/consumer.schema";


@Controller('/daschBoard/admin')
export class ConsumerController {
  constructor(private readonly consumerService : Consumer) {
    
  }
}