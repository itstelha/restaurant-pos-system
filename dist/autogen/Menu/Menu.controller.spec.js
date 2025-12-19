"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Menu_dto_1 = require("./dtos/Menu.dto");
const Menu_controller_1 = require("./Menu.controller");
const Menu_service_1 = require("./Menu.service");
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
describe('MenuController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Menu_service_1.MenuService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            })
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Menu_controller_1.MenuController],
            providers: [Menu_service_1.MenuService, ApiServiceProvider]
        }).compile();
        controller = module.get(Menu_controller_1.MenuController);
        spyService = module.get(Menu_service_1.MenuService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call MenuController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call MenuController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Menu_dto_1.Menu();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Menu.controller.spec.js.map