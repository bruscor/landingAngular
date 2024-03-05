import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonPricesComponent } from './skeleton-prices.component';

describe('SkeletonPricesComponent', () => {
  let component: SkeletonPricesComponent;
  let fixture: ComponentFixture<SkeletonPricesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonPricesComponent]
    });
    fixture = TestBed.createComponent(SkeletonPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
