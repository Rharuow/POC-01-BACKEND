import { AddressUpdateOneRequiredWithoutClientNestedInput } from "../inputs/AddressUpdateOneRequiredWithoutClientNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DocumentUpdateOneRequiredWithoutClientNestedInput } from "../inputs/DocumentUpdateOneRequiredWithoutClientNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ClientUpdateWithoutSalesInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    document?: DocumentUpdateOneRequiredWithoutClientNestedInput | undefined;
    address?: AddressUpdateOneRequiredWithoutClientNestedInput | undefined;
}