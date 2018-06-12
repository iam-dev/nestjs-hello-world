import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import * as crypto from 'crypto';
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

  async findById(id): Promise<User[]> {
    return await this.userModel.findById(id).exec();
  }

  async findByIdAndUpdate(id, updateUserDto: UpdateUserDto) : Promise<User[]> {
    const user = await this.userModel.findByIdAndUpdate(id, updateUserDto).exec();
    console.log('user' +user);
    if (user) {
      return await this.findById(user.id);
    } else {
      return;
    } 
  }

  async findOne(jsonData): Promise<User[]>{
    const user = await this.userModel.findOne(jsonData).exec();
    return await this.findById(user.id);
  }

  async remove(id): Promise<User[]> {
    let user = await this.userModel.findById(id);
    return await this.userModel.remove(user).exec();
  }

  public validatePassword(password) {
    console.log('In UsersService validatePassword()');
    console.log('password= ' +password);
    let salt = this.getSalt();
    console.log('salt= ' +salt);
    let hash = this.getHash(salt, password);
    console.log('hash= ' +hash);
    if (hash){
      return true;
    } else {
      return false;
    }

  }

  protected getSalt() {
    return crypto.randomBytes(16).toString('hex');;
  }

  protected getHash(password, salt) {
    return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  } 
}