import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';
import { MiEntidad } from './mi-entidad/mi-entidad.entity';
import { MiEntidadModule } from './mi-entidad/mi-entidad.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (): Promise<DataSourceOptions> => {
        const dataSourceOptions: DataSourceOptions = {
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '',
          database: 'baseapi',
          entities: [MiEntidad],
          synchronize: true,
        };

        let isConnected = false;

        const tryConnect = async (): Promise<DataSourceOptions> => {
          const mysql = require('mysql2/promise');

          try {
            const connection = await mysql.createConnection({
              host: dataSourceOptions.host,
              port: dataSourceOptions.port,
              user: dataSourceOptions.username,
              password: dataSourceOptions.password,
              database: dataSourceOptions.database,
            });

            await connection.end();

            if (!isConnected) {
              console.log('✅ Conectado a la base de datos MySQL');
              isConnected = true;
            }

            return dataSourceOptions;
          } catch (err) {
            if (err.code === 'ECONNREFUSED') {
              console.error('❌ No se pudo conectar a MySQL. Reintentando en 3 segundos...');
            } else {
              console.error('❌ Error al conectar a MySQL:', err.message);
            }

            return new Promise((resolve) => {
              setTimeout(async () => {
                const result = await tryConnect();
                resolve(result); // importante: siempre devolver TypeOrmModuleOptions
              }, 3000);
            });
          }
        };

        return await tryConnect();
      },
    }),
    MiEntidadModule,
  ],
})
export class AppModule {}
