import { NestFactory } from '@nestjs/core';
import { AdminApiModule } from './admin-api.module';

async function bootstrap() {
  const app = await NestFactory.create(AdminApiModule);
  await app.listen(process.env.ADMIN_PORT ?? 3002);
}
bootstrap();
