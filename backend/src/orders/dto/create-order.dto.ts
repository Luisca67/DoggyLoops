import {
  IsString,
  IsNumber,
  IsOptional,
  IsEmail,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @MaxLength(200)
  customer_name: string;

  @IsEmail()
  @MaxLength(200)
  email: string;

  @IsString()
  @MaxLength(20)
  phone: string;

  @IsString()
  @MaxLength(20)
  description: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  estimated_price?: number;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  image_url?: string;
}
