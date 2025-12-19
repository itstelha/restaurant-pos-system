import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Table } from './dtos/Table.dto';
import { TableService } from './Table.service';
export declare class TableController implements CrudController<Table> {
    service: TableService;
    constructor(service: TableService);
    get base(): CrudController<Table>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Table> | Table[]>;
    get(req: CrudRequest): Promise<Table>;
    create(req: CrudRequest, dto: Table): Promise<Table>;
    createMany(req: CrudRequest, dto: CreateManyDto<Table>): Promise<Table[]>;
    update(req: CrudRequest, dto: Table): Promise<Table>;
    replace(req: CrudRequest, dto: Table): Promise<Table>;
    delete(req: CrudRequest): Promise<void | Table>;
}
