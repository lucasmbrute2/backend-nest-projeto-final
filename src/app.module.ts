import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProfileModule } from './profile/profile.module';
import { GenreModule } from './genre/genre.module';
import { UserModule } from './user/user.module';
import { GameModule } from './game/game.module';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [GameModule, UserModule, ProfileModule, GenreModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
