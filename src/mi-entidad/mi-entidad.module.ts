import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MiEntidad } from './mi-entidad.entity';
import { MiEntidadService } from './mi-entidad.service';
import { MiEntidadController } from './mi-entidad.controller';


@Module({
  imports: [TypeOrmModule.forFeature([MiEntidad])],
  providers: [MiEntidadService],
  controllers: [MiEntidadController],
})
export class MiEntidadModule {}
