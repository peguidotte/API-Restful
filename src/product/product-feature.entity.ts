import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'product_features' })
export class ProductFeatureEntity {
    
    @PrimaryColumn({ name: 'id', type: 'uuid' })
    id: string;

    @Column({ name: 'name', length: 100, nullable: false })
    name: string;

    @Column({ name: 'description', type: 'text', nullable: false })
    description: string;

}