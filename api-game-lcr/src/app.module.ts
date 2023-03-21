import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameLcrModule } from './game-lcr/game-lcr.module';

@Module({
  imports: [GameLcrModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
