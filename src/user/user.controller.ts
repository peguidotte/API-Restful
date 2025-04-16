
import { Body, Controller, Get, Post } from "@nestjs/common";
import { userRepository } from "./user.repository";

@Controller("/users")
export class UserController {

    constructor(private userRepository: userRepository) {}

    @Post()
    async createUser(@Body() user: any) {
        this.userRepository.save(user)
        return user
    }

    @Get()
    async listUsers() {
        return this.userRepository.listAll()
    }

}