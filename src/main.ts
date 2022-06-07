import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';
import { protoPackages, protoPaths } from './config/protos.config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:50051',
        package: protoPackages,
        protoPath: protoPaths,
        loader: { keepCase: true },
      },
    },
  );

  await app.listen();
}
bootstrap();
