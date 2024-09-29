import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class createConsumerDTO {
  @ApiProperty({ type : String ,required : true})
  @IsString()
  name : string

  @ApiProperty({type : String,required : true})
  @IsString()
  phone : string

  @ApiProperty({type : String , required : true})
  @IsString()
  password : string 

}

export class updateConsumerDTO extends PartialType(createConsumerDTO){}