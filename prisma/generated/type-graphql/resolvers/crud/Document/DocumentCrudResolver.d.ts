import type { GraphQLResolveInfo } from "graphql";
import { AggregateDocumentArgs } from "./args/AggregateDocumentArgs";
import { CreateManyDocumentArgs } from "./args/CreateManyDocumentArgs";
import { CreateOneDocumentArgs } from "./args/CreateOneDocumentArgs";
import { DeleteManyDocumentArgs } from "./args/DeleteManyDocumentArgs";
import { DeleteOneDocumentArgs } from "./args/DeleteOneDocumentArgs";
import { FindFirstDocumentArgs } from "./args/FindFirstDocumentArgs";
import { FindFirstDocumentOrThrowArgs } from "./args/FindFirstDocumentOrThrowArgs";
import { FindManyDocumentArgs } from "./args/FindManyDocumentArgs";
import { FindUniqueDocumentArgs } from "./args/FindUniqueDocumentArgs";
import { FindUniqueDocumentOrThrowArgs } from "./args/FindUniqueDocumentOrThrowArgs";
import { GroupByDocumentArgs } from "./args/GroupByDocumentArgs";
import { UpdateManyDocumentArgs } from "./args/UpdateManyDocumentArgs";
import { UpdateOneDocumentArgs } from "./args/UpdateOneDocumentArgs";
import { UpsertOneDocumentArgs } from "./args/UpsertOneDocumentArgs";
import { Document } from "../../../models/Document";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateDocument } from "../../outputs/AggregateDocument";
import { DocumentGroupBy } from "../../outputs/DocumentGroupBy";
export declare class DocumentCrudResolver {
    aggregateDocument(ctx: any, info: GraphQLResolveInfo, args: AggregateDocumentArgs): Promise<AggregateDocument>;
    createManyDocument(ctx: any, info: GraphQLResolveInfo, args: CreateManyDocumentArgs): Promise<AffectedRowsOutput>;
    createOneDocument(ctx: any, info: GraphQLResolveInfo, args: CreateOneDocumentArgs): Promise<Document>;
    deleteManyDocument(ctx: any, info: GraphQLResolveInfo, args: DeleteManyDocumentArgs): Promise<AffectedRowsOutput>;
    deleteOneDocument(ctx: any, info: GraphQLResolveInfo, args: DeleteOneDocumentArgs): Promise<Document | null>;
    findFirstDocument(ctx: any, info: GraphQLResolveInfo, args: FindFirstDocumentArgs): Promise<Document | null>;
    findFirstDocumentOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstDocumentOrThrowArgs): Promise<Document | null>;
    documents(ctx: any, info: GraphQLResolveInfo, args: FindManyDocumentArgs): Promise<Document[]>;
    document(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDocumentArgs): Promise<Document | null>;
    getDocument(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDocumentOrThrowArgs): Promise<Document | null>;
    groupByDocument(ctx: any, info: GraphQLResolveInfo, args: GroupByDocumentArgs): Promise<DocumentGroupBy[]>;
    updateManyDocument(ctx: any, info: GraphQLResolveInfo, args: UpdateManyDocumentArgs): Promise<AffectedRowsOutput>;
    updateOneDocument(ctx: any, info: GraphQLResolveInfo, args: UpdateOneDocumentArgs): Promise<Document | null>;
    upsertOneDocument(ctx: any, info: GraphQLResolveInfo, args: UpsertOneDocumentArgs): Promise<Document>;
}
