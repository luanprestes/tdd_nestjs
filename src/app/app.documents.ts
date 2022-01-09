import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export class ConfigApiDocumentation {
  constructor(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('Application API')
      .setDescription('The API description')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
}
