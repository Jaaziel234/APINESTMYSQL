import { Controller,Get } from '@nestjs/common';
import { MiEntidadService } from './mi-entidad.service';
import { MiEntidad } from './mi-entidad.entity';

@Controller('mi-entidad') // http://localhost:3000/mi-entidad
export class MiEntidadController {
  constructor(private readonly miEntidadService: MiEntidadService) {}

  @Get()
  getAll(): Promise<MiEntidad[]> {
    return this.miEntidadService.findAll();
  }
}
