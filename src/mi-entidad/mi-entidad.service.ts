import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MiEntidad } from './mi-entidad.entity';

@Injectable()
export class MiEntidadService {
    constructor(
        @InjectRepository(MiEntidad)
        private readonly miEntidadRepo: Repository<MiEntidad>,
      ) {}
      findAll(): Promise<MiEntidad []> {
        return this.miEntidadRepo.find();
      }
}
