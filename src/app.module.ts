import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './common/database/database.module';
import { AuthModule } from './common/auth/auth.module';
import { LoggerModule } from './logger/logger.module';
import { VisitorsModule } from './visitors/visitors.module';
import { IpaddressesModule } from './ipaddresses/ipaddresses.module';


@Module({
  imports: [UsersModule, DatabaseModule, AuthModule, LoggerModule, VisitorsModule, IpaddressesModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
