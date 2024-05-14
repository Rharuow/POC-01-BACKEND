import { CategoryOrderByWithRelationInput } from "../../../inputs/CategoryOrderByWithRelationInput";
import { CategoryWhereInput } from "../../../inputs/CategoryWhereInput";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput";
export declare class FindFirstCategoryArgs {
    where?: CategoryWhereInput | undefined;
    orderBy?: CategoryOrderByWithRelationInput[] | undefined;
    cursor?: CategoryWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "createdAt" | "deletedAt" | "updatedAt" | "name"> | undefined;
}