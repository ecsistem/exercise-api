import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ nullable: true })
  gifUrl: string;

  @Column('text')
  description: string;

  @Column({ type: 'enum', enum: ['fácil', 'médio', 'difícil'] })
  difficulty: string;

  @Column({ length: 50 })
  muscleGroup: string;
}
