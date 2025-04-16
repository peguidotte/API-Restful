import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { userRepository } from "./user.repository";
import { EmailIsUniqueValidator } from "./validation/emailIsUnique.validator";

@Module({
    controllers: [UserController],
    providers: [userRepository, EmailIsUniqueValidator]
})

export class UserModule { }