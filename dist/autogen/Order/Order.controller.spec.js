"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Order_dto_1 = require("./dtos/Order.dto");
const Order_controller_1 = require("./Order.controller");
const Order_service_1 = require("./Order.service");
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
describe('OrderController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Order_service_1.OrderService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            })
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Order_controller_1.OrderController],
            providers: [Order_service_1.OrderService, ApiServiceProvider]
        }).compile();
        controller = module.get(Order_controller_1.OrderController);
        spyService = module.get(Order_service_1.OrderService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call OrderController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call OrderController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Order_dto_1.Order();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Order.controller.spec.js.map