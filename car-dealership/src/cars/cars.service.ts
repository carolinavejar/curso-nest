import { Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [{
        id:  1,
        brand: 'Toyota',
        model: 'Corolla'
    }, {
        id:  2,
        brand: 'Suzuki',
        model: 'Swift'
    }]

    findAll () { 
        return this.cars
    }

    findOneById (id: number) {
        const car = this.cars.find(item => item.id == id);
        if (car) return car;
        else throw new NotFoundException(`Car ${id} not found`)
    }
}
