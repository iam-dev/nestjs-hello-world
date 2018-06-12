import { IsString, IsEmail, IsDate, IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';


export class UpdateUserDto {
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
}