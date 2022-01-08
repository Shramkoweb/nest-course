import { Test, TestingModule } from '@nestjs/testing';

import { CoffeesService } from './coffees.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

class CoffeeRepositoryFake {}

class FlavorRepositoryFake {}

describe('CoffeesService', () => {
  let service: CoffeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<CoffeesService>(CoffeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
