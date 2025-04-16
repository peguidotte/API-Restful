import { ArrayMinSize, IsArray, IsDate, IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, IsUrl, IsUUID, MaxLength, Min, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class characteristicsProductDTO {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;
}

export class imagesProductDTO {
    @IsUrl()
    url: string;

    @IsString()
    description: string;
}

export class createProductDTO {

    @IsUUID()
    userId: string;

    @IsNotEmpty()
    name: string;

    @IsNumber({ maxDecimalPlaces: 2 })
    @IsPositive()
    value: number;

    @IsInt()
    @Min(0)
    quantity: Int32Array;

    @IsNotEmpty()
    @MaxLength(1000)
    description: string;

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(2)
    @Type(() => characteristicsProductDTO)
    characteristics: characteristicsProductDTO[];

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