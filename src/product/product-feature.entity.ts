import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity({ name: 'product_features' })
export class ProductFeatureEntity {

    @PrimaryColumn({ name: 'id', type: 'uuid' })
    id: string;

    @Column({ name: 'name', length: 100, nullable: false })
    name: string;

    @Column({ name: 'description', type: 'text', nullable: false })
    description: string;

    @ManyToOne(() => ProductEntity, (product) => product.features, { orphanedRowAction: 'delete', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    product: ProductEntity;
}