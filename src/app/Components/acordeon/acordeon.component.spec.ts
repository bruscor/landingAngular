import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordeonComponent } from './acordeon.component';

describe('AcordeonComponent', () => {
  let component: AcordeonComponent;
  let fixture: ComponentFixture<AcordeonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcordeonComponent]
    });
    fixture = TestBed.createComponent(AcordeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
