import {
  IsString,
  IsNumber,
  IsOptional,
  MaxLength,
  Min,
  Max,
} from 'class-validator';

export class CreateTestimonialDto {
  @IsString()
  @MaxLength(200)
  name: string;

  @IsString()
  message: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(5)
  rating?: number;
}
