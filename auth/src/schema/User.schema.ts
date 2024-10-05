import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ unique: true })
  fullname: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, default: null })
  password: string;

  @Prop({ default: null })
  services: object[];
}

export const UserSchema = SchemaFactory.createForClass(User);
