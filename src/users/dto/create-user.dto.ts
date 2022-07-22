import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, Length } from 'class-validator'

export class CreateUserDto {

    @ApiProperty({ example: 'test@mail.com', description: 'email' })
    @IsString({ message: 'Email must be string' })
    @IsEmail({}, { message: 'Wrong email' })
    readonly email: string

    @ApiProperty({ example: 'asdf123', description: 'passowrd' })
    @IsString({ message: 'Password must be string' })
    @Length(4, 10, {
        message: 'Password length must be not lower than 4 and not longer than 10'
    })
    readonly password: string

}