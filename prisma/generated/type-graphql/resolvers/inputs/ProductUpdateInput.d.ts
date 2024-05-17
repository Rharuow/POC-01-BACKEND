import { CategoriesProductsUpdateManyWithoutProductNestedInput } from "../inputs/CategoriesProductsUpdateManyWithoutProductNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { OrderUpdateManyWithoutProductNestedInput } from "../inputs/OrderUpdateManyWithoutProductNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProductUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    inventory_quantity?: IntFieldUpdateOperationsInput | undefined;
    categories?: CategoriesProductsUpdateManyWithoutProductNestedInput | undefined;
    orders?: OrderUpdateManyWithoutProductNestedInput | undefined;
}
