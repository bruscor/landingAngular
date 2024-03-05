import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonMonthlyComponent } from './skeleton-monthly.component';

describe('SkeletonMonthlyComponent', () => {
  let component: SkeletonMonthlyComponent;
  let fixture: ComponentFixture<SkeletonMonthlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonMonthlyComponent]
    });
    fixture = TestBed.createComponent(SkeletonMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
