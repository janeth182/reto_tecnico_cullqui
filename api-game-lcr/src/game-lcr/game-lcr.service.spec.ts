import { Test, TestingModule } from '@nestjs/testing';
import { GameLcrService } from './game-lcr.service';

describe('GameLcrService', () => {
  let service: GameLcrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameLcrService],
    }).compile();

    service = module.get<GameLcrService>(GameLcrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
