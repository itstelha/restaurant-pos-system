import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { QueryOptions } from '@nestjsx/crud';
import { ParsedRequestParams } from '@nestjsx/crud-request';
import { Payment } from './Payment.entity';
export declare class PaymentService extends TypeOrmCrudService<Payment> {
    constructor(repo: any);
    getSelect(query: ParsedRequestParams, options: QueryOptions): string[];
}
