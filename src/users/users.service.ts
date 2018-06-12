import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@Inject('UserModelToken') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createduser = new this.userModel(createUserDto);
    return await createduser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findById(id) : Promise<User[]> {
    return await this.userModel.findById(id).exec();
  }

  async findByIdAndUpdate(id, updateUserDto: UpdateUserDto) : Promise<User[]> {
    let user = await this.userModel.findByIdAndUpdate(id, updateUserDto).exec();
    console.log('user' +user);
    if (user) {
      return await this.findById(user.id);
    } else {
      const err = {"statusCode": 403}
      return err;
    } 
  }

  async remove(id): Promise<User[]> {
    let user = await this.userModel.findById(id);
    return await this.userModel.remove(user).exec();
  }
}