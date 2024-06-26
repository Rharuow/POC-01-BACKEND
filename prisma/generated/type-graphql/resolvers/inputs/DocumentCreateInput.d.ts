import { ClientCreateNestedOneWithoutDocumentInput } from "../inputs/ClientCreateNestedOneWithoutDocumentInput";
export declare class DocumentCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    deletedAt?: Date | undefined;
    updatedAt?: Date | undefined;
    cpf?: string | undefined;
    cnpj?: string | undefined;
    client: ClientCreateNestedOneWithoutDocumentInput;
}
