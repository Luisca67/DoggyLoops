import { NestFactory } from "@nestjs/core"
import { ValidationPipe } from "@nestjs/common"
import { AppModule } from "./app.module"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Habilitar CORS para el frontend
  app.enableCors({
    origin: ["http://localhost:3000", "https://tu-dominio.com"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })

  // Prefijo global para la API
  app.setGlobalPrefix("api")

  // Habilitar validación global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )

  const port = process.env.PORT || 3001
  await app.listen(port)

  console.log(`🚀 DoggyLoops API running on: http://localhost:${port}/api`)
}

bootstrap()
