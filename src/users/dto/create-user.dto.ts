import { IsString, IsEmail, IsDate, IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import * as crypto from 'crypto';

export class CreateUserDto {
  @ApiModelProperty()
  @IsString()
  @IsNotEmpty()
  readonly username: string;
  
  @ApiModelProperty()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiModelProperty()
  @IsString()
  readonly description: string;
  
  @ApiModelProperty()
  @IsString()
  readonly password: string;

  @ApiModelProperty()
  @IsString()
  readonly hash: string;

  @ApiModelProperty()
  @IsString()
  readonly salt: string;

  @ApiModelProperty()
  @IsDate()
  readonly effectiveDateFrom: Date;

  @ApiModelProperty()
  @IsDate()
  readonly effectiveDateTo: Date;

  @ApiModelProperty()
  @IsString()
  readonly createdBy: string;

  @ApiModelProperty()
  @IsString()
  readonly lastUpdatedBy: string;
  
  @ApiModelProperty()
  @IsDate() 
  readonly createdAt: Date;

  @ApiModelProperty()
  @IsDate() 
  readonly updatedAt: Date;

  public validatePassword(password) {
    console.log('In CreateUserDto.validatePassword()');
    console.log('password= ' +password);
    let salt = this.getSalt();
    console.log('salt= ' +salt);
    let hash = this.getHash(salt, password);
    console.log('hash= ' +hash);
    if (hash === this.hash){
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