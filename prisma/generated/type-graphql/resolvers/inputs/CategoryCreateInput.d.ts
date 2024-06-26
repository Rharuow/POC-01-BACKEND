import { CategoriesProductsCreateNestedManyWithoutCategoryInput } from "../inputs/CategoriesProductsCreateNestedManyWithoutCategoryInput";
export declare class CategoryCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    deletedAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    produtos?: CategoriesProductsCreateNestedManyWithoutCategoryInput | undefined;
}
