import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  create(createOrderDto: CreateOrderDto, file?: Express.Multer.File) {
    const order = this.orderRepository.create(createOrderDto);

    if (file) {
      order.image_url = `/uploads/${file.filename}`;
    }

    return this.orderRepository.save(order);
  }

  findAll() {
    return this.orderRepository.find({
      order: { created_at: 'DESC' },
    });
  }

  async findOne(id: number) {
    const order = await this.orderRepository.findOne({
      where: { id },
    });

    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }

    return order;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const order = await this.findOne(id);
    Object.assign(order, updateOrderDto);
    return this.orderRepository.save(order);
  }

  async remove(id: number) {
    const order = await this.findOne(id);
    return this.orderRepository.remove(order);
  }

  async updateStatus(id: number, status: string) {
    const order = await this.findOne(id);
    order.status = status;
    return this.orderRepository.save(order);
  }

  findByStatus(status: string) {
    return this.orderRepository.find({
      where: { status },
      order: { created_at: 'DESC' },
    });
  }
}
