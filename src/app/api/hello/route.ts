import { NestFactory } from '@nestjs/core'
import { AppModule } from '@/nest/app.module'
import { AppService } from '@/nest/app.service'

export async function GET(request: Request) {
  const app = await NestFactory.createApplicationContext(AppModule)
  await app.init()
  await app.get(AppService).pingTestService()
  return new Response('Hello, Next.js!')
}
