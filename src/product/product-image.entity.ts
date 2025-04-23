import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'product_images' })
export class ProductImageEntity {

    @PrimaryColumn({ name: 'id', type: 'uuid' })
    id: string;

    @Column({ name: 'url', length: 255, nullable: false })
    url: string;

    @Column({ name: 'description', type: 'text', nullable: true })
    description: string;

}