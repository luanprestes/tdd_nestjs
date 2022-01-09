import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigApiDocumentation } from './app/app.documents';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  new ConfigApiDocumentation(app);
  await app.listen(3000);
}
bootstrap();
