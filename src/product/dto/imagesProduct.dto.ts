import { IsNotEmpty, IsString, IsUrl, IsUUID } from "class-validator";
import { ProductEntity } from "../product.entity";

export class imagesProductDTO {

    @IsUUID()
    id: string;

    @IsUrl()
    url: string;

    @IsString()
    description: string;

    @IsNotEmpty()
    product: ProductEntity;
}