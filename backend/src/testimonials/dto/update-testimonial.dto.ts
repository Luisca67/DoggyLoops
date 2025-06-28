import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  MaxLength,
  Min,
  Max,
} from 'class-validator';

export class UpdateTestimonialDto {
  @IsOptional()
  @IsString()
  @MaxLength(200)
  name?: string;

  @IsOptional()
  @IsString()
  message?: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(5)
  rating?: number;

  @IsOptional()
  @IsBoolean()
  is_approved?: boolean;
}
