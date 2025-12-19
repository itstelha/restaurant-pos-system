import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Order } from './dtos/Order.dto';
import { OrderService } from './Order.service';
export declare class OrderController implements CrudController<Order> {
    service: OrderService;
    constructor(service: OrderService);
    get base(): CrudController<Order>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Order> | Order[]>;
    get(req: CrudRequest): Promise<Order>;
    create(req: CrudRequest, dto: Order): Promise<Order>;
    createMany(req: CrudRequest, dto: CreateManyDto<Order>): Promise<Order[]>;
    update(req: CrudRequest, dto: Order): Promise<Order>;
    replace(req: CrudRequest, dto: Order): Promise<Order>;
    delete(req: CrudRequest): Promise<void | Order>;
}
