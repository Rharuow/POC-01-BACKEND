"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateWithoutDocumentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateNestedOneWithoutClientInput_1 = require("../inputs/AddressCreateNestedOneWithoutClientInput");
const OrderCreateNestedManyWithoutClientInput_1 = require("../inputs/OrderCreateNestedManyWithoutClientInput");
let ClientCreateWithoutDocumentInput = class ClientCreateWithoutDocumentInput {
};
exports.ClientCreateWithoutDocumentInput = ClientCreateWithoutDocumentInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutDocumentInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateWithoutDocumentInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateWithoutDocumentInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateWithoutDocumentInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutDocumentInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutDocumentInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutDocumentInput.prototype, "documentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutDocumentInput.prototype, "addressId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateNestedOneWithoutClientInput_1.AddressCreateNestedOneWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCreateNestedOneWithoutClientInput_1.AddressCreateNestedOneWithoutClientInput)
], ClientCreateWithoutDocumentInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutClientInput_1.OrderCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedManyWithoutClientInput_1.OrderCreateNestedManyWithoutClientInput)
], ClientCreateWithoutDocumentInput.prototype, "Orders", void 0);
exports.ClientCreateWithoutDocumentInput = ClientCreateWithoutDocumentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateWithoutDocumentInput", {})
], ClientCreateWithoutDocumentInput);
