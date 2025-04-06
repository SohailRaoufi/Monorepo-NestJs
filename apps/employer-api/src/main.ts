import { NestFactory } from '@nestjs/core';
import { EmployerApiModule } from './employer-api.module';

async function bootstrap() {
  const app = await NestFactory.create(EmployerApiModule);
  await app.listen(process.env.port ?? 3003);
}
bootstrap();
