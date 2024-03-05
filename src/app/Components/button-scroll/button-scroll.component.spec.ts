import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonScrollComponent } from './button-scroll.component';

describe('ButtonScrollComponent', () => {
  let component: ButtonScrollComponent;
  let fixture: ComponentFixture<ButtonScrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonScrollComponent]
    });
    fixture = TestBed.createComponent(ButtonScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
