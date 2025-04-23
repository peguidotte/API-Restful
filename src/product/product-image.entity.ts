import { Column, Entity } from "typeorm";   

@Entity({ name: 'product_images' })
export class ProductImageEntity {
    @Column({ name: 'url', length: 255, nullable: false })
    url: string;

    @Column({ name: 'description', type: 'text', nullable: true })
    description: string;
}