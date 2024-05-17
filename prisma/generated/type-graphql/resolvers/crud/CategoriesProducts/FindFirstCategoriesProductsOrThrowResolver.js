"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCategoriesProductsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstCategoriesProductsOrThrowArgs_1 = require("./args/FindFirstCategoriesProductsOrThrowArgs");
const CategoriesProducts_1 = require("../../../models/CategoriesProducts");
const helpers_1 = require("../../../helpers");
let FindFirstCategoriesProductsOrThrowResolver = class FindFirstCategoriesProductsOrThrowResolver {
    async findFirstCategoriesProductsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categoriesProducts.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstCategoriesProductsOrThrowResolver = FindFirstCategoriesProductsOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => CategoriesProducts_1.CategoriesProducts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCategoriesProductsOrThrowArgs_1.FindFirstCategoriesProductsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCategoriesProductsOrThrowResolver.prototype, "findFirstCategoriesProductsOrThrow", null);
exports.FindFirstCategoriesProductsOrThrowResolver = FindFirstCategoriesProductsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CategoriesProducts_1.CategoriesProducts)
], FindFirstCategoriesProductsOrThrowResolver);
