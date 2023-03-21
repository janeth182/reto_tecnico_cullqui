import { Module } from '@nestjs/common';
import { GameLcrService } from './game-lcr.service';
import { GameLcrController } from './game-lcr.controller';

@Module({
  controllers: [GameLcrController],
  providers: [GameLcrService]
})
export class GameLcrModule {}
