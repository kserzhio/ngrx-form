import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsFormsComponent } from './cars-forms.component';

describe('CarsFormsComponent', () => {
  let component: CarsFormsComponent;
  let fixture: ComponentFixture<CarsFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
