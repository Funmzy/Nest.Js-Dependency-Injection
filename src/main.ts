import { NestFactory } from '@nestjs/core';
import { ComputerModule } from './computer/computer.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(ComputerModule);
    await app.listen(9000);
  } catch (e) {
    console.log(e);
  }
}
bootstrap();
