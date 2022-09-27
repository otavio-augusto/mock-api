import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000', , 'http://localhost:3001'],
    methods: ['POST', 'PUT', 'DELETE', 'GET'],
    credentials: true
  });

  app.use(cookieParser());

  const config = new DocumentBuilder()
    .setTitle('Mock API')
    .setDescription('Teste do Portal de Recorrência')
    .setVersion('1.0')
    .addTag('mock')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(3000);

}
bootstrap();
