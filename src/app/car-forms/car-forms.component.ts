import { Component, OnInit, Input} from '@angular/core';
import { Car } from '../car.model';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import { CarsService } from '../shared/cars.service';

@Component({
  selector: 'app-car-forms',
  templateUrl: './car-forms.component.html',
  styleUrls: ['./car-forms.component.css']
})
export class CarFormsComponent implements OnInit {
  @Input() car: Car;
  constructor(private store: Store<AppState>, private service: CarsService) { }

  ngOnInit(): void {
  }
  ondelete() {
    this.service.deleteCar(this.car);
  }
  onBuy() {
     this.car.isSold =  true;
     this.service.updateCar(this.car);
  }
}