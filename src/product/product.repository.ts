import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductRepository {
    private products: any[] = [];

    async save(product: any) {
        this.products.push(product);
    }

    async listAll() {
        return this.products;
    }
}