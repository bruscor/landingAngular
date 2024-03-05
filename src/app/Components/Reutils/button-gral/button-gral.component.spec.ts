import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGralComponent } from './button-gral.component';

describe('ButtonGralComponent', () => {
  let component: ButtonGralComponent;
  let fixture: ComponentFixture<ButtonGralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonGralComponent]
    });
    fixture = TestBed.createComponent(ButtonGralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
