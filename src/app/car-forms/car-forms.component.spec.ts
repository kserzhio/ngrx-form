import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFormsComponent } from './car-forms.component';

describe('CarFormsComponent', () => {
  let component: CarFormsComponent;
  let fixture: ComponentFixture<CarFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
