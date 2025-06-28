import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import type { Repository } from "typeorm"
import { Order } from "./entities/order.entity"
import type { CreateOrderDto } from "./dto/create-order.dto"
import type { UpdateOrderDto } from "./dto/update-order.dto"
import type { Express } from "express"

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) {}

  async create(createOrderDto: CreateOrderDto, file?: Express.Multer.File): Promise<Order> {
    const order = this.ordersRepository.create({
      ...createOrderDto,
      imageUrl: file ? `/uploads/${file.filename}` : null,
    })

    return this.ordersRepository.save(order)
  }

  async findAll(): Promise<Order[]> {
    return this.ordersRepository.find({
      order: { createdAt: "DESC" },
    })
  }

  async findOne(id: number): Promise<Order> {
    const order = await this.ordersRepository.findOne({ where: { id } })
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`)
    }
    return order
  }

  async update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order> {
    await this.ordersRepository.update(id, updateOrderDto)
    return this.findOne(id)
  }

  async remove(id: number): Promise<void> {
    const result = await this.ordersRepository.delete(id)
    if (result.affected === 0) {
      throw new NotFoundException(`Order with ID ${id} not found`)
    }
  }

  async updateStatus(id: number, status: string): Promise<Order> {
    await this.ordersRepository.update(id, { status })
    return this.findOne(id)
  }
}
