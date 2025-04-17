import { Test, TestingModule } from '@nestjs/testing';
import { MiEntidadService } from './mi-entidad.service';

describe('MiEntidadService', () => {
  let service: MiEntidadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MiEntidadService],
    }).compile();

    service = module.get<MiEntidadService>(MiEntidadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
