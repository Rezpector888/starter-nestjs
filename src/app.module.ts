import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './common/config/config';
import { ConfigValidation } from './common/config/config-validate';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      validationSchema: ConfigValidation,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
