import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,
    {
      cors: {
        origin: 'http://localhost:3001'
      }
    }
  );
  app.useGlobalPipes( //global pipe onde estão sendo passadas proibições para o DTO
    new ValidationPipe({
      transform: true,
      whitelist: true, //ativa a whitelist
      forbidNonWhitelisted: true // faz com oq tudo que esteja fora do DTO seja proibido.
    })
  )

  await app.listen(3000);
}
bootstrap();
