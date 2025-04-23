import { Injectable } from "@nestjs/common";
import { ProductEntity } from "./product.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>
    ) {}

    async createProduct(product: ProductEntity) {
        await this.productRepository.save(product)
    }

    async listProducts() {
        const productsSaved = await this.productRepository.find()
        return productsSaved
    }

    async updateProduct(id: string, dataToUpdate: Partial<ProductEntity>) {
        await this.productRepository.update(id, dataToUpdate)
    }

    async deleteProduct(id: string) {
        await this.productRepository.delete(id)
    }
}