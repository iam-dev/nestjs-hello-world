import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersService } from '../users.service';
import { environment }  from '../../../environments/environment';

@Controller('create-admin-user')
export class AdminUser {

    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        console.log('createUserDto=' +createUserDto);
    
    }

}