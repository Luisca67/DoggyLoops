import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm"

@Entity("testimonials")
export class Testimonial {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column("text")
  message: string

  @Column()
  rating: number

  @Column({ name: "is_approved", default: false })
  isApproved: boolean

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date
}
