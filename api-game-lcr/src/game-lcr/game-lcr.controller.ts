import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GameLcrService } from './game-lcr.service';
import { DataLcrDto } from './dto/data-lcr.dto';

@Controller('game-lcr')
export class GameLcrController {
  constructor(private readonly gameLcrService: GameLcrService) { }

  @Post()
  create(@Body() data: DataLcrDto) {
    return this.gameLcrService.sendDataToEventBridge(data);
  }
}
