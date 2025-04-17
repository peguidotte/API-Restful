
import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { userRepository } from "./user.repository";
import { createUserDTO } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuid } from "uuid";
import { ListUserDTO } from "./dto/listUser.dto";
import { UpdateUserDTO } from "./dto/updateUser.dto";


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
        return { user: new ListUserDTO(userEntity.id, userEntity.name, userEntity.email), message: "user created" }
    }

    @Get()
    async listUsers() {
        const savedUsers =  await this.userRepository.listAll()
        const users = savedUsers.map(user => new ListUserDTO(user.id, user.name, user.email))
        return users
    }

    @Put(":id")
    async updateUser(@Param('id') id: string, @Body() dataToUpdate: UpdateUserDTO) {
        const userUpdated = await this.userRepository.update(id, dataToUpdate)
        return {
            user: userUpdated,
            message: "user updated"
        }

    }

}