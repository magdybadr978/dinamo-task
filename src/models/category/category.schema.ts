import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema({ timestamps: true })
export class Category {
  @Prop({
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  })
  name: string;
  @Prop({
    type : String,
    required : true,
    lowercase : true
  })
  description : String 
  readonly _id: mongoose.Schema.Types.ObjectId;
}

export const categorySchema = SchemaFactory.createForClass(Category);
