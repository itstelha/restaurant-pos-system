"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Table_dto_1 = require("./dtos/Table.dto");
const Table_controller_1 = require("./Table.controller");
const Table_service_1 = require("./Table.service");
const baseRequest = {
    parsed: {
        fields: [],
        paramsFilter: [],
        search: {},
        filter: [],
        or: [],
        join: [],
        sort: [],
        authPersist: undefined,
        limit: 10,
        offset: 0,
        page: 1,
        cache: undefined,
    },
    options: {}
};
describe('TableController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Table_service_1.TableService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            })
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Table_controller_1.TableController],
            providers: [Table_service_1.TableService, ApiServiceProvider]
        }).compile();
        controller = module.get(Table_controller_1.TableController);
        spyService = module.get(Table_service_1.TableService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call TableController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call TableController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Table_dto_1.Table();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Table.controller.spec.js.map