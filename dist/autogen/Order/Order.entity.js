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
exports.Order = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const crud_1 = require("@nestjsx/crud");
const Menu_entity_1 = require("../Menu/Menu.entity");
const Table_entity_1 = require("../Table/Table.entity");
const Payment_entity_1 = require("../Payment/Payment.entity");
const { CREATE, UPDATE } = crud_1.CrudValidationGroups;
let Order = class Order {
};
exports.Order = Order;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ "type": "int" }),
    __metadata("design:type", Number)
], Order.prototype, "table_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ groups: [UPDATE] }),
    (0, class_validator_1.IsNotEmpty)({ groups: [CREATE] }),
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: false }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Menu_entity_1.Menu, menu => menu.orders),
    (0, typeorm_1.JoinColumn)({ name: 'menuId' }),
    __metadata("design:type", Menu_entity_1.Menu)
], Order.prototype, "menu", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "integer", }),
    __metadata("design:type", Number)
], Order.prototype, "menuId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Table_entity_1.Table, table => table.orders),
    (0, typeorm_1.JoinColumn)({ name: 'tableId' }),
    __metadata("design:type", Table_entity_1.Table)
], Order.prototype, "table", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "integer", }),
    __metadata("design:type", Number)
], Order.prototype, "tableId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => Payment_entity_1.Payment, {
        onDelete: "CASCADE",
        cascade: ["insert", "update"],
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Payment_entity_1.Payment)
], Order.prototype, "payment", void 0);
exports.Order = Order = __decorate([
    (0, typeorm_1.Entity)('order')
], Order);
//# sourceMappingURL=Order.entity.js.map