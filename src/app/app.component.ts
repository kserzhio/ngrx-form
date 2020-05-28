import { Component, OnInit } from '@angular/core';
import { Cars } from './car.model';
import { Store } from '@ngrx/store';
import { AppState } from './redux/app.state';
import { Observable, of } from 'rxjs';
import { map, first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ngrx';
  public carState: Observable<Cars>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.carState = this.store.select('carPage');
    // const obs$ = new Observable(subscriber => {
    //   try {
    //     console.log('hello');
    //     subscriber.next('heello next');
    //     subscriber.complete();
    //     subscriber.next(100); // "return" another value
    //     subscriber.next(200); // "return" yet another
    //   } catch (err) {
    //     console.log(subscriber.error(err));
    //   }

    // });
    // obs$.subscribe(x => {
    //   console.log(x);
    // });

    map(x => x )(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));
    first()(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));
  }
}
