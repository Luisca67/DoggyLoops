import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Testimonial } from './entities/testimonial.entity';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';

@Injectable()
export class TestimonialsService {
  constructor(
    @InjectRepository(Testimonial)
    private testimonialRepository: Repository<Testimonial>,
  ) {}

  create(createTestimonialDto: CreateTestimonialDto) {
    const testimonial = this.testimonialRepository.create({
      ...createTestimonialDto,
      is_approved: true,
    });
    return this.testimonialRepository.save(testimonial);
  }

  findAll() {
    return this.testimonialRepository.find({
      order: { created_at: 'DESC' },
    });
  }

  findAllAdmin() {
    return this.testimonialRepository.find({
      order: { created_at: 'DESC' },
    });
  }

  async findOne(id: number) {
    const testimonial = await this.testimonialRepository.findOne({
      where: { id },
    });

    if (!testimonial) {
      throw new NotFoundException(`Testimonial with ID ${id} not found`);
    }

    return testimonial;
  }

  async update(id: number, updateTestimonialDto: UpdateTestimonialDto) {
    const testimonial = await this.findOne(id);
    Object.assign(testimonial, updateTestimonialDto);
    return this.testimonialRepository.save(testimonial);
  }

  async remove(id: number) {
    const testimonial = await this.findOne(id);
    return this.testimonialRepository.remove(testimonial);
  }

  async approve(id: number) {
    const testimonial = await this.findOne(id);
    testimonial.is_approved = true;
    return this.testimonialRepository.save(testimonial);
  }
}
