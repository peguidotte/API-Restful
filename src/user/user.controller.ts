import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { createUserDTO } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuid } from "uuid";
import { ListUserDTO } from "./dto/listUser.dto";
import { UpdateUserDTO } from "./dto/updateUser.dto";
import { UserService } from "./user.service";


@Controller("/users")
export class UserController {

    constructor(
        private userRepository: UserRepository,
        private UserService: UserService
    ) {}

    @Post()
    async createUser(@Body() user: createUserDTO) {
        const userEntity = new UserEntity()
        userEntity.name = user.name
        userEntity.email = user.email
        userEntity.password = user.password
        userEntity.id = uuid()
        this.UserService.createUser(userEntity)
        return { user: new ListUserDTO(userEntity.id, userEntity.name, userEntity.email), message: "user created" }
    }

    @Get()
    async listUsers() {
        const savedUsers =  await this.UserService.listUsers()
        return savedUsers
    }

    @Put(":id")
    async updateUser(@Param('id') id: string, @Body() dataToUpdate: UpdateUserDTO) {
        const userUpdated = await this.UserService.updateUser(id, dataToUpdate)
        return {
            user: userUpdated,
            message: "user updated"
        }
    }

    @Delete(":id")
    async deleteUser(@Param('id') id: string) {
        const user = await this.UserService.deleteUser(id)
        return {
            user: user,
            message: "user deleted"
        }
    }

}