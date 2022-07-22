import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { FilesModule } from '../files/files.module'
import { Post } from './posts.model'
import { PostsService } from './posts.service'
import { PostsController } from './posts.controller'

@Module({
    providers: [PostsService],
    controllers: [PostsController],
    imports: [
        SequelizeModule.forFeature([Post]),
        FilesModule
    ]
})
export class PostsModule {
}
