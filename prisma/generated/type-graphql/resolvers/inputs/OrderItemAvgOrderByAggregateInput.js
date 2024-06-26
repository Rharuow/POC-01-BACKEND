"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let OrderItemAvgOrderByAggregateInput = class OrderItemAvgOrderByAggregateInput {
};
exports.OrderItemAvgOrderByAggregateInput = OrderItemAvgOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemAvgOrderByAggregateInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemAvgOrderByAggregateInput.prototype, "totalPrice", void 0);
exports.OrderItemAvgOrderByAggregateInput = OrderItemAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderItemAvgOrderByAggregateInput", {})
], OrderItemAvgOrderByAggregateInput);
