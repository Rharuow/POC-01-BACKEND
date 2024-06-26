"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsCreateNestedManyWithoutCategoryInput_1 = require("../inputs/CategoriesProductsCreateNestedManyWithoutCategoryInput");
let CategoryCreateInput = class CategoryCreateInput {
};
exports.CategoryCreateInput = CategoryCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CategoryCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CategoryCreateInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CategoryCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsCreateNestedManyWithoutCategoryInput_1.CategoriesProductsCreateNestedManyWithoutCategoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsCreateNestedManyWithoutCategoryInput_1.CategoriesProductsCreateNestedManyWithoutCategoryInput)
], CategoryCreateInput.prototype, "produtos", void 0);
exports.CategoryCreateInput = CategoryCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryCreateInput", {})
], CategoryCreateInput);
