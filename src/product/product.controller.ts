import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductRepository } from "./product.repository";
import { createProductDTO } from "./dto/createProduct.dto";
import { ProductEntity } from "./product.entity";
import { randomUUID } from "crypto";
import { ProductService } from "./product.service";

@Controller("/product")
export class ProductController {
    constructor(
        private ProductRepository: ProductRepository,
        private ProductService: ProductService
    ) {}

    @Post()
    async createProduct(@Body() dataProduct: createProductDTO) {
        const product = new ProductEntity();

        product.id = randomUUID()
        product.name = dataProduct.name;
        product.description = dataProduct.description;
        product.price = dataProduct.price;
        product.category = dataProduct.category;
        product.quantity = dataProduct.quantity;
        product.userId = dataProduct.userId;

        const newProduct = await this.ProductService.createProduct(product);
        return newProduct
    }

    @Get()
    async listProducts() {
        return this.ProductRepository.listAll()
    }

    @Put(":id")
    async updateProduct(@Param('id') id: string, @Body() dataToUpdate: Partial<ProductEntity>) {
        const productUpdated = await this.ProductService.updateProduct(id, dataToUpdate)
        return {
            product: productUpdated,
            message: "product updated"
        }
    }

    @Delete(":id")
    async deleteProduct(@Param('id') id: string) {
        const product = await this.ProductService.deleteProduct(id)
        return {
            product: product,
            message: "product deleted"
        }
    }
}