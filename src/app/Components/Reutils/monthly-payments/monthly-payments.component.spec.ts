import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyPaymentsComponent } from './monthly-payments.component';

describe('MonthlyPaymentsComponent', () => {
  let component: MonthlyPaymentsComponent;
  let fixture: ComponentFixture<MonthlyPaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyPaymentsComponent]
    });
    fixture = TestBed.createComponent(MonthlyPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
