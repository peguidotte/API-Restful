import { Injectable } from "@nestjs/common";

@Injectable()
export class userRepository {
    private users: any[] = [];

    async save(user: any) {
        this.users.push(user);
    }

    async listAll() {
        return this.users;
    }
}