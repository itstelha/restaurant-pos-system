"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Payment_dto_1 = require("./dtos/Payment.dto");
const Payment_controller_1 = require("./Payment.controller");
const Payment_service_1 = require("./Payment.service");
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
describe('PaymentController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Payment_service_1.PaymentService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            })
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Payment_controller_1.PaymentController],
            providers: [Payment_service_1.PaymentService, ApiServiceProvider]
        }).compile();
        controller = module.get(Payment_controller_1.PaymentController);
        spyService = module.get(Payment_service_1.PaymentService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call PaymentController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call PaymentController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Payment_dto_1.Payment();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Payment.controller.spec.js.map