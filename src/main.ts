import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app/app.module';
import { ConfigApiDocumentation } from './app/app.documents';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  new ConfigApiDocumentation(app);
  await app.listen(3000);
}
bootstrap();
