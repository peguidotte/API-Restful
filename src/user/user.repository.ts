import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserRepository {
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

    async findById(id: string) {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }

    async update(id: string, dataToUpdate: Partial<UserEntity>) {
        const user = this.findById(id);
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

    async delete(id: string) {
        const user = this.findById(id)
        this.users = this.users.filter(userSave => userSave.id !== id)
        return user;
    }
}