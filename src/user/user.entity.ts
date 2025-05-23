import { Entity, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm'

@Entity({name: 'users'})
export class UserEntity {

    @PrimaryGeneratedColumn('uuid', {name: 'id'})
    id: string;

    @Column({name: 'name', length: 100, nullable: false})
    name: string;

    @Column({name: 'email', length: 70, unique: true, nullable: false})
    email: string;

    @Column({name: 'password', length: 255, nullable: false})
    password: string;

    @CreateDateColumn({name: 'created_at', type: 'timestamp'})
    createdAt: string;

    @UpdateDateColumn({name: 'updated_at', type: 'timestamp', nullable: true})
    updatedAt: string;

    @DeleteDateColumn({name: 'deleted_at', type: 'timestamp', nullable: true})
    deletedAt: string;

}