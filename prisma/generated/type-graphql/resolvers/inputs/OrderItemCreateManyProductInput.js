"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemCreateManyProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrderItemCreateManyProductInput = class OrderItemCreateManyProductInput {
};
exports.OrderItemCreateManyProductInput = OrderItemCreateManyProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemCreateManyProductInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderItemCreateManyProductInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderItemCreateManyProductInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderItemCreateManyProductInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderItemCreateManyProductInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderItemCreateManyProductInput.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemCreateManyProductInput.prototype, "orderId", void 0);
exports.OrderItemCreateManyProductInput = OrderItemCreateManyProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderItemCreateManyProductInput", {})
], OrderItemCreateManyProductInput);
