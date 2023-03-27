import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'nestjs-prisma';
import config from './common/config/config';
import { ConfigValidation } from './common/config/config-validate';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      validationSchema: ConfigValidation,
    }),
    PrismaModule.forRoot({
      isGlobal: true
    }),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
