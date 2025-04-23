import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserService } from "./user.service";
import { UserEntity } from "./user.entity";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";
import { EmailIsUniqueValidator } from "./validation/emailIsUnique.validator";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UserController],
    providers: [UserService, UserRepository, EmailIsUniqueValidator]
})

export class UserModule { }