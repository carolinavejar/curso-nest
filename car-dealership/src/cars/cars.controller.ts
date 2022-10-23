import { Controller, Get, Param, ParseIntPipe, Post, Body, Patch, Delete, ParseUUIDPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService : CarsService
    ) {}

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarByID( @Param('id', new ParseUUIDPipe( { version: '4'} )) id : string ) {
        console.log("id: ", id);
        
        return this.carsService.findOneById(id)
    }

    @Post()
    create( @Body() createCarDto : CreateCarDto) {
        return this.carsService.create(createCarDto)
    }

    @Patch(':id')
    update(
         @Param('id', ParseUUIDPipe ) id:string,
         @Body() updateCarDto:UpdateCarDto) {
        return this.carsService.update(id, updateCarDto)
    }

    @Delete(':id')
    delete(@Param('id', ParseUUIDPipe) id : string ) {
        return this.carsService.delete(id)
    }
}
