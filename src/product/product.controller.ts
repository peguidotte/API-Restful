import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductRepository } from "./product.repository";

@Controller("/product")
export class ProductController {
    constructor(private ProductRepository: ProductRepository) {}

    @Post()
    async createProduct(@Body() product: any) {
        this.ProductRepository.save(product)
        return product
    }

    @Get()
    async listProducts() {
        return this.ProductRepository.listAll()
    }
}