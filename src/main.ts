import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { env } from 'process';
import { AppModule } from './app.module';
import { UnauthorizedInterceptor } from './interceptors/unauthorized.interceptor';

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
  //Interceptors
  app.useGlobalInterceptors(new UnauthorizedInterceptor)
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
