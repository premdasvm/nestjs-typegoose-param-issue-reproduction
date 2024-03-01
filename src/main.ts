import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { swaggerOptions } from './swagger.plugin';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger Setup

  const options = new DocumentBuilder()
    .setTitle('NestJS-Typegoose')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options, {});

  SwaggerModule.setup('doc', app, document, {
    explorer: true,
    swaggerOptions,
  });

  await app.listen(3000);
}
bootstrap();
