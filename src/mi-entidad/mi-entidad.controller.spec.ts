import { Test, TestingModule } from '@nestjs/testing';
import { MiEntidadController } from './mi-entidad.controller';

describe('MiEntidadController', () => {
  let controller: MiEntidadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MiEntidadController],
    }).compile();

    controller = module.get<MiEntidadController>(MiEntidadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
