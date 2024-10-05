import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { User } from 'src/schema/User.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const { fullname, email, password } = createUserDto;

    const hashedpassword = await bcrypt.hash(password, 10);

    return this.userModel.create({
      fullname: fullname,
      email: email,
      password: hashedpassword,
    });
  }

  async createOAuth(email: string, displayName: string) {
    return this.userModel.create({
      email: email,
      fullname: displayName,
      password: await bcrypt.hash('password', 10),
    });
  }

  async findAll() {
    return await this.userModel.find();
  }

  async findByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  async findOne(id: string) {
    return await this.userModel.findById(id);
  }

  async update(email: string, updateUserDto: UpdateUserDto) {
    const { services, ...rest } = updateUserDto;
    return await this.userModel.findOneAndUpdate({ email }, updateUserDto);
  }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
