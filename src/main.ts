import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ApiKeyGuard } from './common/guards/api-key.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      disableErrorMessages: process.env.NODE_ENV === 'production',
      transform:
        true /* transform primitives in controller params/query findOne(id: number) */,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true /* transform full class dto types */,
      },
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalGuards(new ApiKeyGuard());

  await app.listen(process.env.APP_PORT);
}

bootstrap();
