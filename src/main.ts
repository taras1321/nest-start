import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { ValidationPipe } from './pipes/validation.pipe'

async function bootstrap() {
    const PORT = process.env.PORT
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('NestJS Backend')
        .setDescription('Rest API Documentation')
        .setVersion('1.0.0')
        // .addTag('NestJS the best')
        .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)

    app.useGlobalPipes(new ValidationPipe())

    await app.listen(PORT, () => console.log(`Server has started on port ${PORT}`))
}

bootstrap()
