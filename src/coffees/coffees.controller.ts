import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @HttpCode(HttpStatus.OK) @Get() findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll();
  }

  @HttpCode(HttpStatus.OK) @Get(':id') findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  @HttpCode(HttpStatus.CREATED) @Post() create(
    @Body() createCoffeeDto: CreateCoffeeDto,
  ) {
    return this.coffeesService.create(createCoffeeDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT) @Patch(':id') update(
    @Param('id') id: string,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT) @Delete(':id') remove(
    @Param('id') id: string,
  ) {
    return this.coffeesService.remove(id);
  }
}
