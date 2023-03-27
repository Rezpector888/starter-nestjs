import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import helmet from 'helmet';
import compression from 'compression';
import { ConfigService } from '@nestjs/config';
import { CommonInterface } from './common/config/config-interface'
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: '*',
    credentials: false,
  })
  app.use(helmet({
    hidePoweredBy: true,
  }));
  app.use(compression())
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.setGlobalPrefix('api');
  const config = app.get(ConfigService);
  const logger = new Logger;
  await app.listen(config.get<CommonInterface>('common').port)
  logger.debug('server running on ' + config.get<CommonInterface>('common').appUrl)
}
bootstrap();
