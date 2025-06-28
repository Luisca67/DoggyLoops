import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from "@nestjs/common"
import { FileInterceptor } from "@nestjs/platform-express"
import type { OrdersService } from "./orders.service"
import type { CreateOrderDto } from "./dto/create-order.dto"
import type { UpdateOrderDto } from "./dto/update-order.dto"
import type { Express } from "express"

@Controller("orders")
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @UseInterceptors(FileInterceptor("image"))
  create(@Body() createOrderDto: CreateOrderDto, @UploadedFile() file?: Express.Multer.File) {
    return this.ordersService.create(createOrderDto, file)
  }

  @Get()
  findAll() {
    return this.ordersService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @Patch(":id")
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }

  @Patch(":id/status")
  updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.ordersService.updateStatus(+id, status)
  }
}
