export class CreateUserDto {
    readonly username: string;
    readonly email: number;
    readonly description: string;
    readonly hash: string;
    readonly salt: string;
    readonly effectiveDateFrom: Date;
    readonly effectiveDateTo: Date;
    readonly createdBy: string;
    readonly lastUpdatedBy: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
  }