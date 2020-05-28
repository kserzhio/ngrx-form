import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import * as moment from 'moment';
import { CarsService } from '../shared/cars.service';

@Component({
  selector: 'app-cars-forms',
  templateUrl: './cars-forms.component.html',
  styleUrls: ['./cars-forms.component.css'],
})
export class CarsFormsComponent implements OnInit {
  carName = '';
  carModel = '';
  constructor(private service: CarsService) {}

  ngOnInit(): void {}
  onAdd() {
    if (this.carModel === '' || this.carName === '') { return; }
    const date =  moment().format('DD.MM.YY');
    const car = new Car(
      this.carName,
      date,
      this.carModel,
    );
    this.service.addCar(car);
    this.carName = '';
    this.carModel = '';
  }
  onLoad() {
      this.service.loadCars();
  }
}
