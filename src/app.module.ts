import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseModule } from './modules/exercise/exercise.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nestuser',
      password: 'nestpass',
      database: 'exercise_db',
      autoLoadEntities: true,
      synchronize: true, // Apenas para desenvolvimento
    }),
    ExerciseModule,
  ],
})
export class AppModule {}
