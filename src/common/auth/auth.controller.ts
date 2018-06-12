import { Controller, Get, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-token.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get('token')
        async createToken(@Body() createAuthDto: CreateAuthDto): Promise<any> {
        return await this.authService.createToken(createAuthDto);
    }

    @Get('data')
    @UseGuards(AuthGuard('jwt'))
        findAll() {
        // this route is restricted
    }
}
