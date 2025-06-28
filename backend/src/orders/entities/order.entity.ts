import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "customer_name" })
  customerName: string

  @Column()
  email: string

  @Column()
  phone: string

  @Column("text")
  description: string

  @Column({ name: "image_url", nullable: true })
  imageUrl: string

  @Column({ default: "pending" })
  status: string

  @Column({ name: "estimated_price", type: "decimal", precision: 10, scale: 2, nullable: true })
  estimatedPrice: number

  @Column({ name: "estimated_delivery_date", type: "date", nullable: true })
  estimatedDeliveryDate: Date

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date
}
