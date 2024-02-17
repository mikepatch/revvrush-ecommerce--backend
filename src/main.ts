import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const logger = new Logger('bootstrap');
  app.useLogger(logger);

  await app.listen(PORT);
  logger.log(`Application is running on: http://localhost:${PORT} 🚀`);
}
bootstrap();
