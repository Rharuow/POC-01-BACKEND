"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyOrderResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyOrderArgs_1 = require("./args/UpdateManyOrderArgs");
const Order_1 = require("../../../models/Order");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyOrderResolver = class UpdateManyOrderResolver {
    async updateManyOrder(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).order.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyOrderResolver = UpdateManyOrderResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyOrderArgs_1.UpdateManyOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyOrderResolver.prototype, "updateManyOrder", null);
exports.UpdateManyOrderResolver = UpdateManyOrderResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Order_1.Order)
], UpdateManyOrderResolver);
