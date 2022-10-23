import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dtos/index';

@Injectable()
export class CarsService {
    private cars: Car[] = [{
        id:  uuid(),
        brand: 'Toyota',
        model: 'Corolla'
    }, {
        id:  uuid(),
        brand: 'Suzuki',
        model: 'Swift'
    }, {
        id:  uuid(),
        brand: 'Honda',
        model: 'Civic'
    }]

    findAll () { 
        return this.cars
    }

    findOneById (id: string) {
        const car = this.cars.find(item => item.id == id);
        if (car) return car;
        else throw new NotFoundException(`Car ${id} not found`)
    }

    create ( createCarDto : CreateCarDto) {
        console.log(createCarDto);
        // const car :  Car = {
        //     id:  uuid(),
        //     brand: createCarDto.brand,
        //     model: createCarDto.model,
        // }

        const car :  Car = {
            id:  uuid(),
            ...createCarDto
        }

        this.cars.push(car);
        return car;
    }

    update (id: string, updateCarDto: UpdateCarDto)  {
        
        let carDB = this.findOneById(id);

        if( updateCarDto.id && updateCarDto.id !== id)
            throw new BadRequestException (`Car id not is valid`)
        
        this.cars = this.cars.map( car=> {
            if(car.id === id) {               
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id
                }
                return carDB;
            }
            return car;
                
        })
    return carDB;
    }

    delete (id: string) {
        let carDB = this.findOneById(id);

        this.cars = this.cars.filter( car => car.id !== id );
        return;
    }
}
