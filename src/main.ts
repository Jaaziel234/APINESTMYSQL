// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
    console.log('🚀 Aplicación iniciada en http://localhost:3000');
  } catch (error) {
    if (error?.code === 'ECONNREFUSED') {
      console.error('❌ No se pudo conectar a la base de datos. Asegúrate de que MySQL esté activo (por ejemplo, enciende Laragon).');
    } else {
      console.error('❌ Error al iniciar la aplicación:', error);
    }
    process.exit(1); // Detener la app si no puede conectarse
  }
}

bootstrap();
