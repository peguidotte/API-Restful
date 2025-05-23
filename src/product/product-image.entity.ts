import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity({ name: 'product_images' })
export class ProductImageEntity {

    @PrimaryColumn({ name: 'id', type: 'uuid' })
    id: string;

    @Column({ name: 'url', length: 255, nullable: false })
    url: string;

    @Column({ name: 'description', type: 'text', nullable: true })
    description: string;

    @ManyToOne(() => ProductEntity, (product) => product.images, { orphanedRowAction: 'delete', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    product: ProductEntity;
}