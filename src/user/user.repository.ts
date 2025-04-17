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

    async existentEmail(email: string, excludeUserId?: string) {
        const possibleUser = this.users.find(
            user => user.email === email && (!excludeUserId || user.id !== excludeUserId));
        return possibleUser !== undefined;
    }

    async update(id: string, dataToUpdate: Partial<UserEntity>) {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new Error("User not found");
        }
        Object.entries(dataToUpdate).forEach(([key, value]) => {
            if (key === "id") {
                return;
            }
            if (value !== undefined) {
                user[key] = value;
            }
        })
        return user;
    }
}