import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Menu } from './dtos/Menu.dto';
import { MenuService } from './Menu.service';
export declare class MenuController implements CrudController<Menu> {
    service: MenuService;
    constructor(service: MenuService);
    get base(): CrudController<Menu>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Menu> | Menu[]>;
    get(req: CrudRequest): Promise<Menu>;
    create(req: CrudRequest, dto: Menu): Promise<Menu>;
    createMany(req: CrudRequest, dto: CreateManyDto<Menu>): Promise<Menu[]>;
    update(req: CrudRequest, dto: Menu): Promise<Menu>;
    replace(req: CrudRequest, dto: Menu): Promise<Menu>;
    delete(req: CrudRequest): Promise<void | Menu>;
}
