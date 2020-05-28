import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { CAR_ACTION, AddCar } from './cars.action';
import { CarsService } from '../shared/cars.service';
import { Car } from '../car.model';
import { switchMap, mergeMap } from 'rxjs/operators';

@Injectable()
export class CarsEffect {
    constructor(private actions$: Actions, private service: CarsService){}
    @Effect() loadCars = this.actions$
    .pipe(
        ofType(CAR_ACTION.ADD_CAR),
        switchMap((actions: AddCar) => {
            return this.service.preloadCars();
        }),
        mergeMap((cars: Car[]) => {
            return [
                {
                    type: CAR_ACTION.LOAD_CARS,
                    payload: cars
                }
            ]
        })
        )
}