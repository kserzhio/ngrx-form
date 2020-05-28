import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CarsFormsComponent } from './cars-forms/cars-forms.component';
import { CarFormsComponent } from './car-forms/car-forms.component';
import { carsReducer } from './redux/cars.reducer';
import { CarsService } from './shared/cars.service';
import { EffectsModule } from '@ngrx/effects';
import { CarsEffect } from './redux/cars.effect';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CarsFormsComponent,
    CarFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([CarsEffect]),
    StoreModule.forRoot({carPage: carsReducer}),
    RouterModule.forRoot([
      {path: '', component: AppComponent}
    ]),
    StoreRouterConnectingModule.forRoot(),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
