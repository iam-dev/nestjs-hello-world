import { NestFactory, FastifyAdapter } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());

  const options = new DocumentBuilder()
    .setTitle('Nest JS REST API')
    .setDescription('The NESTJS API description')
    .setVersion('0.0.1')
    .addTag('users')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);

  
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  
  await app.listen(3000);
}
bootstrap();
