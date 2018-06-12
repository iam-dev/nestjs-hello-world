import { Module } from '@nestjs/common';
import { UsersModule } from '../../users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
    imports: [UsersModule],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController]
})
export class AuthModule {}
