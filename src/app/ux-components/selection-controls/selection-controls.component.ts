import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection-controls',
  templateUrl: './selection-controls.component.html',
  styleUrls: ['./selection-controls.component.scss']
})
export class SelectionControlsComponent implements OnInit {
  x: number;
  y: number;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e): void {
    this.x = e.clientX;
    this.y = e.clientY;
  }
}
