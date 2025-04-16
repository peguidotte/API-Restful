
import { Body, Controller, Get, Post } from "@nestjs/common";
import { userRepository } from "./user.repository";
import { createUserDTO } from "./dto/createUser.dto";

@Controller("/users")
export class UserController {

    constructor(private userRepository: userRepository) {}

    @Post()
    async createUser(@Body() user: createUserDTO) {
        this.userRepository.save(user)
        return user
    }

    @Get()
    async listUsers() {
        return this.userRepository.listAll()
    }

}