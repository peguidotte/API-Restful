import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductRepository } from "./product.repository";
import { createProductDTO } from "./dto/createProduct.dto";

@Controller("/product")
export class ProductController {
    constructor(private ProductRepository: ProductRepository) {}

    @Post()
    async createProduct(@Body() product: createProductDTO) {
        this.ProductRepository.save(product)
        return product
    }

    @Get()
    async listProducts() {
        return this.ProductRepository.listAll()
    }
}