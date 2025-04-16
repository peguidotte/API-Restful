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

    async existentEmail(email: string) {
        const possibleUser = this.users.find(user => user.email === email);
        return possibleUser !== undefined;
    }
}