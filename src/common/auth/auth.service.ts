import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { UsersService } from '../../users/users.service';
import { environment }  from '../../../environments/environment';
import { CreateAuthDto } from './dto/create-token.dto';

@Injectable()
export class AuthService {

  constructor(private readonly usersService: UsersService){}

  async createToken(createAuthDto: CreateAuthDto) {
    const user: JwtPayload = createAuthDto;
    const expiresIn = 3600;
    const accessToken = jwt.sign(user, environment.secret, { expiresIn });
    return {
      expiresIn,
      accessToken,
    };
  }
  
  async validateUser(payload: JwtPayload): Promise<any> {
        // put some validation logic here
        // for example query user by id/email/username
    return {};
  }
}
