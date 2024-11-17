import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { Exercise } from './exercise.entity';

@Controller('exercises')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Get()
  findAll(): Promise<Exercise[]> {
    return this.exerciseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Exercise> {
    return this.exerciseService.findOne(+id);
  }

  @Post()
  create(@Body() exercise: Exercise): Promise<Exercise> {
    return this.exerciseService.create(exercise);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() exercise: Exercise,
  ): Promise<Exercise> {
    return this.exerciseService.update(+id, exercise);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.exerciseService.remove(+id);
  }
}
