import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema({ timestamps: true })
export class Category {
  @Prop({
    type: String,
    required: true,
    unique: true,
    trime: true,
    lowercase: true,
  })
  name: string;
  readonly _id: mongoose.Schema.Types.ObjectId;
}

export const categorySchema = SchemaFactory.createForClass(Category);
