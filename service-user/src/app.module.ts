import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [AuthModule, UserModule, DatabaseModule, ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, UsersModule],
})
export class AppModule {}
