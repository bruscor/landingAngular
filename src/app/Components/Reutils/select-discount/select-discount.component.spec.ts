import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDiscountComponent } from './select-discount.component';

describe('SelectDiscountComponent', () => {
  let component: SelectDiscountComponent;
  let fixture: ComponentFixture<SelectDiscountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectDiscountComponent]
    });
    fixture = TestBed.createComponent(SelectDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
