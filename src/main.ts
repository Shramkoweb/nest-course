import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform:
        true /* transform primitives in controller params/query findOne(id: number) */,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true /* transform full class dto types */,
      },
    }),
  );
  await app.listen(3000);
}

bootstrap();
