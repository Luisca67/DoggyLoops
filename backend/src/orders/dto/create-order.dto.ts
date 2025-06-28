import { IsString, IsEmail, IsNotEmpty, IsOptional } from "class-validator"

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  customerName: string

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  phone: string

  @IsString()
  @IsNotEmpty()
  description: string

  @IsOptional()
  @IsString()
  imageUrl?: string
}
