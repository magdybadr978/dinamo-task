import { HttpException, HttpStatus } from "@nestjs/common";

export class ErrorClass extends HttpException{
  constructor(message : string, statusCode : HttpStatus) {
    super(message , statusCode)
  }
}