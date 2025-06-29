import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto, file?: Express.Multer.File): Promise<import("./entities/order.entity").Order>;
    findAll(status?: string): Promise<import("./entities/order.entity").Order[]>;
    findOne(id: string): Promise<import("./entities/order.entity").Order>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<import("./entities/order.entity").Order>;
    remove(id: string): Promise<import("./entities/order.entity").Order>;
    updateStatus(id: string, status: string): Promise<import("./entities/order.entity").Order>;
}
