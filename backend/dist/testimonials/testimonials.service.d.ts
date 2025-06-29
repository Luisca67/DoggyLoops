import { Repository } from 'typeorm';
import { Testimonial } from './entities/testimonial.entity';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
export declare class TestimonialsService {
    private testimonialRepository;
    constructor(testimonialRepository: Repository<Testimonial>);
    create(createTestimonialDto: CreateTestimonialDto): Promise<Testimonial>;
    findAll(): Promise<Testimonial[]>;
    findAllAdmin(): Promise<Testimonial[]>;
    findOne(id: number): Promise<Testimonial>;
    update(id: number, updateTestimonialDto: UpdateTestimonialDto): Promise<Testimonial>;
    remove(id: number): Promise<Testimonial>;
    approve(id: number): Promise<Testimonial>;
}
