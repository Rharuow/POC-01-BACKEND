"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderOrderByWithRelationInput_1 = require("../inputs/OrderOrderByWithRelationInput");
const ProductOrderByWithRelationInput_1 = require("../inputs/ProductOrderByWithRelationInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let OrderItemOrderByWithRelationInput = class OrderItemOrderByWithRelationInput {
};
exports.OrderItemOrderByWithRelationInput = OrderItemOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], OrderItemOrderByWithRelationInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemOrderByWithRelationInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemOrderByWithRelationInput.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemOrderByWithRelationInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemOrderByWithRelationInput.prototype, "orderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductOrderByWithRelationInput_1.ProductOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductOrderByWithRelationInput_1.ProductOrderByWithRelationInput)
], OrderItemOrderByWithRelationInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderOrderByWithRelationInput_1.OrderOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderOrderByWithRelationInput_1.OrderOrderByWithRelationInput)
], OrderItemOrderByWithRelationInput.prototype, "order", void 0);
exports.OrderItemOrderByWithRelationInput = OrderItemOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderItemOrderByWithRelationInput", {})
], OrderItemOrderByWithRelationInput);
