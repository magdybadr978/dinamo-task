import { Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true, discriminatorKey: 'type' })
export class Consumer {
  name: string;
  phone: string;
  password: string;
  readonly _id?: mongoose.Schema.Types.ObjectId;
}
export const consumerSchema = SchemaFactory.createForClass(Consumer);
