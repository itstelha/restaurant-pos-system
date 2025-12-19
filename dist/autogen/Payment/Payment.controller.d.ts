import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Payment } from './dtos/Payment.dto';
import { PaymentService } from './Payment.service';
export declare class PaymentController implements CrudController<Payment> {
    service: PaymentService;
    constructor(service: PaymentService);
    get base(): CrudController<Payment>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Payment> | Payment[]>;
    get(req: CrudRequest): Promise<Payment>;
    create(req: CrudRequest, dto: Payment): Promise<Payment>;
    createMany(req: CrudRequest, dto: CreateManyDto<Payment>): Promise<Payment[]>;
    update(req: CrudRequest, dto: Payment): Promise<Payment>;
    replace(req: CrudRequest, dto: Payment): Promise<Payment>;
    delete(req: CrudRequest): Promise<void | Payment>;
}
