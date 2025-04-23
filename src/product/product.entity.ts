import { Column, Entity, UpdateDateColumn, PrimaryGeneratedColumn, DeleteDateColumn, CreateDateColumn } from "typeorm";
import { ProductFeatureEntity } from "./product-feature.entity";
import { ProductImageEntity } from "./product-image.entity";


@Entity({ name: 'products' })
export class ProductEntity {

    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id: string;

    @Column({ name: 'user_id', length: 100, nullable: false })
    userId: string;

    @Column({ name: 'name', length: 100, nullable: false })
    name: string;

    @Column({ name: 'price', type: 'decimal', precision: 10, scale: 2, nullable: false })
    price: number;

    @Column({ name: 'quantity', type: 'int', nullable: false })
    quantity: number;

    @Column({ name: 'description', type: 'text', nullable: false })
    description: string;

    @Column({ name: 'category', length: 50, nullable: false })
    category: string;
    
    
    features: ProductFeatureEntity[];

    images: ProductImageEntity[];

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: string;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', nullable: true })
    updatedAt: string;

    @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
    deletedAt: string;

}