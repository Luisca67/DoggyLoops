import {
  IsString,
  IsNumber,
  IsOptional,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MaxLength(200)
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  image_url?: string;

  @IsNumber()
  categoryId: number;
}
