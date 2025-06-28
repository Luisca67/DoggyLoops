import {
  IsString,
  IsNumber,
  IsOptional,
  IsEmail,
  MaxLength,
  Min,
  IsEnum,
} from 'class-validator';

export class UpdateOrderDto {
  @IsOptional()
  @IsString()
  @MaxLength(200)
  customer_name?: string;

  @IsOptional()
  @IsEmail()
  @MaxLength(200)
  email?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  phone?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(['pending', 'in_progress', 'completed', 'cancelled'])
  status?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  estimated_price?: number;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  image_url?: string;
}
