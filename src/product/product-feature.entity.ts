import { Column, Entity } from "typeorm";

@Entity({ name: 'product_features' })
export class ProductFeatureEntity {
    
    @Column({ name: 'name', length: 100, nullable: false })
    name: string;

    @Column({ name: 'description', type: 'text', nullable: false })
    description: string;
}