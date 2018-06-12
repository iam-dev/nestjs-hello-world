import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { environment }  from '../../environments/environment';

@Injectable()
export class AuthService {
    async createToken() {
        const user: JwtPayload = { email: 'test@email.com' };
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
