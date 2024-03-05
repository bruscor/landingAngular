import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloading',
  templateUrl: './preloading.component.html',
  styleUrls: ['./preloading.component.css']
})
export class PreloadingComponent implements OnInit {

  isDone = false;
  progress = 0;
  width = 0;

  constructor() { }

  ngOnInit() {
    const interval = setInterval(() => {
      if (this.progress < 100) {
        this.setProgress(1); // Incrementa el progreso en 1 (ajusta según tu necesidad)
      } else {
        clearInterval(interval);
        this.setWidth();
        this.setIsDone();
      }
    }, 10);
  }

  setProgress(progress: number) {
    this.progress = this.progress + progress;
  }

  setWidth() {
    this.width = 100;
  }

  setIsDone() {
    this.isDone = true;
  }
}