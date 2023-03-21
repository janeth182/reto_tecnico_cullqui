import { Test, TestingModule } from '@nestjs/testing';
import { GameLcrController } from './game-lcr.controller';
import { GameLcrService } from './game-lcr.service';

describe('GameLcrController', () => {
  let controller: GameLcrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameLcrController],
      providers: [GameLcrService],
    }).compile();

    controller = module.get<GameLcrController>(GameLcrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
