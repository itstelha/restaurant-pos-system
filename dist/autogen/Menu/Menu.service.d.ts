import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { QueryOptions } from '@nestjsx/crud';
import { ParsedRequestParams } from '@nestjsx/crud-request';
import { Menu } from './Menu.entity';
export declare class MenuService extends TypeOrmCrudService<Menu> {
    constructor(repo: any);
    getSelect(query: ParsedRequestParams, options: QueryOptions): string[];
}
