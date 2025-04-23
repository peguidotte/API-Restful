import { ArrayMinSize, IsArray, IsDate, IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, IsUrl, IsUUID, MaxLength, Min, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { featuresProductDTO } from "./featuresProduct.dto";
import { imagesProductDTO } from "./imagesProduct.dto";

export class createProductDTO {

    @IsUUID()
    userId: string;

    @IsNotEmpty()
    name: string;

    @IsNumber({ maxDecimalPlaces: 2 })
    @IsPositive()
    price: number;

    @IsInt()
    @Min(0)
    quantity: number;

    @IsNotEmpty()
    @MaxLength(1000)
    description: string;

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(2)
    @Type(() => featuresProductDTO)
    features: featuresProductDTO[];

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => imagesProductDTO)
    images: imagesProductDTO[];

    @IsNotEmpty()
    category: string;

    @IsDate()
    @Type(() => Date)
    createdAt: Date;

    @IsDate()
    @Type(() => Date)
    updatedAt: Date;
}