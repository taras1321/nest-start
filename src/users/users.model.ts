import { ApiProperty } from '@nestjs/swagger'
import { BelongsToMany, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript'
import { Post } from '../posts/posts.model'
import { Role } from '../roles/roles.model'
import { UserRoles } from '../roles/user-roles.model'

interface UserCreationAttr {
    email: string,
    password: string
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttr> {

    @ApiProperty({ example: '1', description: 'unique identifier' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ApiProperty({ example: 'test@mail.com', description: 'email' })
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    email: string

    @ApiProperty({ example: 'asdf123', description: 'passowrd' })
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string

    @ApiProperty({ example: 'true', description: 'is user banned' })
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    banned: boolean

    @ApiProperty({ example: 'spam', description: 'reason of ban' })
    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    banReason: string

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]

    @HasMany(() => Post)
    posts: Post[]

}