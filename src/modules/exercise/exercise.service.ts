import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercise } from './exercise.entity';

@Injectable()
export class ExerciseService {
  constructor(
    @InjectRepository(Exercise)
    private exerciseRepository: Repository<Exercise>,
  ) {}

  findAll(): Promise<Exercise[]> {
    return this.exerciseRepository.find();
  }

  findOne(id: number): Promise<Exercise> {
    return this.exerciseRepository.findOne({ where: { id } });
  }

  create(exercise: Exercise): Promise<Exercise> {
    return this.exerciseRepository.save(exercise);
  }

  async update(id: number, exercise: Exercise): Promise<Exercise> {
    await this.exerciseRepository.update(id, exercise);
    return this.exerciseRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.exerciseRepository.delete(id);
  }
}
