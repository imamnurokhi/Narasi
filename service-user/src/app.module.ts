import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthModule, UserModule, DatabaseModule, ConfigModule.forRoot({ isGlobal: true }), DatabaseModule],
})
export class AppModule {}
