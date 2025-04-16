
import { Body, Controller, Get, Post } from "@nestjs/common";
import { userRepository } from "./user.repository";
import { createUserDTO } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuid } from "uuid";

@Controller("/users")
export class UserController {

    constructor(private userRepository: userRepository) {}

    @Post()
    async createUser(@Body() user: createUserDTO) {
        const userEntity = new UserEntity()
        userEntity.name = user.name
        userEntity.email = user.email
        userEntity.password = user.password
        userEntity.id = uuid()
        this.userRepository.save(userEntity)
        return { id: userEntity.id, message: "user created" }
    }

    @Get()
    async listUsers() {
        return this.userRepository.listAll()
    }

}