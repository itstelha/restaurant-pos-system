"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const crud_1 = require("@nestjsx/crud");
const Order_entity_1 = require("../Order/Order.entity");
const { CREATE, UPDATE } = crud_1.CrudValidationGroups;
let Menu = class Menu {
};
exports.Menu = Menu;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Menu.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ groups: [UPDATE] }),
    (0, class_validator_1.IsNotEmpty)({ groups: [CREATE] }),
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: false }),
    __metadata("design:type", String)
], Menu.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ groups: [UPDATE] }),
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Menu.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ "type": "numeric", precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Menu.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ groups: [UPDATE] }),
    (0, class_validator_1.IsNotEmpty)({ groups: [CREATE] }),
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: false }),
    __metadata("design:type", String)
], Menu.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Order_entity_1.Order, order => order.menu),
    __metadata("design:type", Array)
], Menu.prototype, "orders", void 0);
exports.Menu = Menu = __decorate([
    (0, typeorm_1.Entity)('menu')
], Menu);
//# sourceMappingURL=Menu.entity.js.map