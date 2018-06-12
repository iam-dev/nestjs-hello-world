import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import {
  ApiUseTags,
  ApiBearerAuth,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiUseTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ title: 'Create user' })
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ title: 'Get all users' })
  @ApiResponse({ status: 200 })
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ title: 'Get a specific user by id' })
  @ApiResponse({ status: 200 })
  async findById(@Param('id') id) : Promise<User[]> {
    return await this.usersService.findById(id);
  }

  @Put(':id')
  @ApiOperation({ title: 'Update a specific user by id' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async update(@Param('id') id, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.findByIdAndUpdate(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ title: 'Delete a specific user by id' })
  @ApiResponse({ status: 200, description: 'User deleted' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async remove(@Param('id') id) {
    return await this.usersService.remove(id);
  }
}