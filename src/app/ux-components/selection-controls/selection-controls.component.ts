import { Component, HostListener, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selection-controls',
  templateUrl: './selection-controls.component.html',
  styleUrls: ['./selection-controls.component.scss']
})
export class SelectionControlsComponent implements OnInit {
  x: number;
  y: number;
  selected = new EventEmitter<[number, number]>();
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e): void {
    this.x = e.clientX;
    this.y = e.clientY;
  }

  @HostListener('click', ['$event'])
  click(e): void {
    this.selected.emit([this.x, this.y]);
  }
}
