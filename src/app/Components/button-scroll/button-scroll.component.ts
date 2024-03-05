import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-button-scroll',
  templateUrl: './button-scroll.component.html',
  styleUrls: ['./button-scroll.component.css']
})
export class ButtonScrollComponent implements OnInit {

  scrollPosition: number = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.scrollPosition = window.scrollY;
      this.cdr.detectChanges(); // Detect changes to update the view
    });
  }
}