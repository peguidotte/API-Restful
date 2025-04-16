import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";

@Injectable()
export class userRepository {
    private users: UserEntity[] = [];

    async save(user: UserEntity) {
        this.users.push(user);
    }

    async listAll() {
        return this.users;
    }

    async existentEmail(email: string) {
        const possibleUser = this.users.find(user => user.email === email);
        return possibleUser !== undefined;
    }
}