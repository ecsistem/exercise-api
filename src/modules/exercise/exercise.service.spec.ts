import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseService } from './exercise.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercise } from './exercise.entity';

describe('ExerciseService', () => {
  let service: ExerciseService;
  let repository: Repository<Exercise>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExerciseService,
        {
          provide: getRepositoryToken(Exercise),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<ExerciseService>(ExerciseService);
    repository = module.get<Repository<Exercise>>(getRepositoryToken(Exercise));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of exercises', async () => {
      const result = [new Exercise()];
      jest.spyOn(repository, 'find').mockResolvedValue(result);

      expect(await service.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a single exercise', async () => {
      const result = new Exercise();
      jest.spyOn(repository, 'findOne').mockResolvedValue(result);

      expect(await service.findOne(1)).toBe(result);
    });
  });

  describe('create', () => {
    it('should create a new exercise', async () => {
      const result = new Exercise();
      jest.spyOn(repository, 'save').mockResolvedValue(result);

      expect(await service.create(result)).toBe(result);
    });
  });

  describe('update', () => {
    it('should update an existing exercise', async () => {
      const result = new Exercise();
      jest.spyOn(repository, 'update').mockResolvedValue(undefined);
      jest.spyOn(repository, 'findOne').mockResolvedValue(result);

      expect(await service.update(1, result)).toBe(result);
    });
  });

  describe('remove', () => {
    it('should remove an exercise', async () => {
      jest.spyOn(repository, 'delete').mockResolvedValue(undefined);

      expect(await service.remove(1)).toBeUndefined();
    });
  });
});
