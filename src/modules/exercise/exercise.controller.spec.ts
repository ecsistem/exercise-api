import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseController } from './exercise.controller';
import { ExerciseService } from './exercise.service';
import { Exercise } from './exercise.entity';

describe('ExerciseController', () => {
  let controller: ExerciseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExerciseController],
      providers: [
        {
          provide: ExerciseService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([]),
            findOne: jest.fn().mockResolvedValue({}),
            create: jest.fn().mockResolvedValue({}),
            update: jest.fn().mockResolvedValue({}),
            remove: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    controller = module.get<ExerciseController>(ExerciseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of exercises', async () => {
      await expect(controller.findAll()).resolves.toEqual([]);
    });
  });

  describe('findOne', () => {
    it('should return a single exercise', async () => {
      const id = '1';
      await expect(controller.findOne(id)).resolves.toEqual({});
    });
  });

  describe('create', () => {
    it('should create a new exercise', async () => {
      const exercise: Exercise = {
        id: 1,
        name: 'Test Exercise',
        gifUrl: '',
        description: '',
        difficulty: '',
        muscleGroup: '',
      };
      await expect(controller.create(exercise)).resolves.toEqual({});
    });
  });

  describe('update', () => {
    it('should update an existing exercise', async () => {
      const id = '1';
      const exercise: Exercise = {
        id: 1,
        name: 'Updated Exercise',
        gifUrl: '',
        description: '',
        difficulty: '',
        muscleGroup: '',
      };
      await expect(controller.update(id, exercise)).resolves.toEqual({});
    });
  });

  describe('remove', () => {
    it('should remove an exercise', async () => {
      const id = '1';
      await expect(controller.remove(id)).resolves.toBeUndefined();
    });
  });
});
