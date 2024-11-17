import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseService } from './exercise.service';

describe('ExerciseService', () => {
  let service: ExerciseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExerciseService,
        {
          provide: 'ExerciseRepository',
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<ExerciseService>(ExerciseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
