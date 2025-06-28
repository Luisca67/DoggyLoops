import { Injectable, NotFoundException } from "@nestjs/common"
import type { Repository } from "typeorm"
import type { Testimonial } from "./entities/testimonial.entity"
import type { CreateTestimonialDto } from "./dto/create-testimonial.dto"

@Injectable()
export class TestimonialsService {
  private testimonialsRepository: Repository<Testimonial>

  constructor(testimonialsRepository: Repository<Testimonial>) {
    this.testimonialsRepository = testimonialsRepository
  }

  async create(createTestimonialDto: CreateTestimonialDto): Promise<Testimonial> {
    const testimonial = this.testimonialsRepository.create(createTestimonialDto)
    return this.testimonialsRepository.save(testimonial)
  }

  async findAll(): Promise<Testimonial[]> {
    return this.testimonialsRepository.find({
      where: { isApproved: true },
      order: { createdAt: "DESC" },
    })
  }

  async findAllForAdmin(): Promise<Testimonial[]> {
    return this.testimonialsRepository.find({
      order: { createdAt: "DESC" },
    })
  }

  async approve(id: number): Promise<Testimonial> {
    await this.testimonialsRepository.update(id, { isApproved: true })
    const testimonial = await this.testimonialsRepository.findOne({ where: { id } })
    if (!testimonial) {
      throw new NotFoundException(`Testimonial with ID ${id} not found`)
    }
    return testimonial
  }

  async remove(id: number): Promise<void> {
    const result = await this.testimonialsRepository.delete(id)
    if (result.affected === 0) {
      throw new NotFoundException(`Testimonial with ID ${id} not found`)
    }
  }
}
