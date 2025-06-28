import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('testimonials')
export class Testimonial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200 })
  name: string;

  @Column({ type: 'text' })
  message: string;

  @Column({ type: 'int', default: 5 })
  rating: number;

  @Column({ type: 'boolean', default: false })
  is_approved: boolean;

  @CreateDateColumn()
  created_at: Date;
}
