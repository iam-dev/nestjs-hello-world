import { IsString, IsEmail, IsDate, IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateAuthDto {
  @ApiModelProperty()
  @IsString()
  readonly token: string;

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
  readonly password: string;

  @ApiModelProperty()
  @IsString()
  readonly expiresIn: string;

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
}