import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './profile/profile.module';
import { GenreModule } from './genre/genre.module';
import { GameModule } from './game/game.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [GameModule, UserModule, ProfileModule, GenreModule, GameModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
