import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ListUserDTO } from "./dto/listUser.dto";
import { createUserDTO } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";
import { Repository } from "typeorm";
import { UpdateUserDTO } from "./dto/updateUser.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}

    async createUser(user: UserEntity) {
        await this.userRepository.save(user)
    }

    async listUsers() {
        const usersSaved = await this.userRepository.find()
        const usersList = usersSaved.map((user) => new ListUserDTO(user.id, user.name, user.email))
        return usersList
    }

    async updateUser(id: string, dataToUpdate: UpdateUserDTO) {
        const userUpdated = await this.userRepository.update(id, dataToUpdate)
        
    }

    async deleteUser(id: string) {
        const user = await this.userRepository.delete(id)
    }
}