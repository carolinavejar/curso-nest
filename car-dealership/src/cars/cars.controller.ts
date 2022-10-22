import { Controller, Get, Param, ParseIntPipe, Post, Body, Patch, Delete } from '@nestjs/common';
import { CarsService } from './cars.service';

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
    getCarByID( @Param('id', ParseIntPipe) id : number ) {
        console.log("id: ", id);
        
        return this.carsService.findOneById(id)
    }

    @Post()
    create( @Body() body:any) {
        return {ok: true, data: body}
    }

    @Patch(':id')
    update( @Body() body:any) {
        return body
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id : number ) {
        return {
            method: 'delete',
            id
        }
    }
}
