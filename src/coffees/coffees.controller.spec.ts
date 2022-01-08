import { Test, TestingModule } from '@nestjs/testing';

import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

// TODO move to some test config init ?
class CoffeeRepositoryFake {}

class FlavorRepositoryFake {}

describe('CoffeesController', () => {
  let controller: CoffeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeesController],
      providers: [
        CoffeesService,
        {
          provide: getRepositoryToken(Coffee),
          useClass: CoffeeRepositoryFake,
        },
        {
          provide: getRepositoryToken(Flavor),
          useClass: FlavorRepositoryFake,
        },
      ],
    }).compile();

    controller = module.get<CoffeesController>(CoffeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
