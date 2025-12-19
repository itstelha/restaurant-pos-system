import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { QueryOptions } from '@nestjsx/crud';
import { ParsedRequestParams } from '@nestjsx/crud-request';
import { Table } from './Table.entity';
export declare class TableService extends TypeOrmCrudService<Table> {
    constructor(repo: any);
    getSelect(query: ParsedRequestParams, options: QueryOptions): string[];
}
