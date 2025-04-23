import { IsNotEmpty, IsUUID } from "class-validator";
import { ProductEntity } from "../product.entity";

export class featuresProductDTO {

    @IsUUID()
    id: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    product: ProductEntity;
}