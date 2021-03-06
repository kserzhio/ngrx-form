import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import { map } from 'rxjs/operators';
import { Car } from '../car.model';
import { LoadCars, AddCar, DeleteCar, UpdateCar } from '../redux/cars.action';
import { Observable } from 'rxjs';

@Injectable()
export class CarsService {
  static BASE_URL = 'http://localhost:3000/';
  constructor(private http: HttpClient, private store: Store<AppState>) {}
  preloadCars(): Observable<any> {
    return this.http.get(CarsService.BASE_URL + 'cars').pipe(
      map((res) => {
        return res;
      })
    );
  }
  loadCars() {
    this.preloadCars()
      .toPromise()
      .then((cars: Car[]) => {
        this.store.dispatch(new LoadCars(cars));
      });
  }
  addCar(car: Car) {
    this.http
      .post(CarsService.BASE_URL + 'cars', car)
      .pipe(
        map((res) => {
          return res;
        })
      )
      .toPromise()
      .then((car: Car) => {
        this.store.dispatch(new AddCar(car));
      });
  }
  deleteCar(car: Car) {
    this.http
      .delete(CarsService.BASE_URL + 'cars/' + car.id)
      .pipe(
        map((res) => {
          return res;
        })
      )
      .toPromise()
      .then(() => {
        this.store.dispatch(new DeleteCar(car));
      });
  }
  updateCar(car: Car) {
    this.http
      .put(CarsService.BASE_URL + 'cars/' + car.id, car)
      .pipe(
        map((res) => {
           return res;
        })
      )
      .toPromise()
      .then((car: Car) => {
        this.store.dispatch(new UpdateCar(car));
      });
  }
}
