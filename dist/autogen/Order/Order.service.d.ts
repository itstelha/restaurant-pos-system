import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { QueryOptions } from '@nestjsx/crud';
import { ParsedRequestParams } from '@nestjsx/crud-request';
import { Order } from './Order.entity';
export declare class OrderService extends TypeOrmCrudService<Order> {
    constructor(repo: any);
    getSelect(query: ParsedRequestParams, options: QueryOptions): string[];
}
