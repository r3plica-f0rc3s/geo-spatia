import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-curtain',
  templateUrl: './curtain.component.html',
  styleUrls: ['./curtain.component.scss'],
  animations: [
    trigger('disableButton', [
      state('true', style({ width: '*' })),
      state('false', style({ width: '20px' })),
      transition('false <=> true', animate('500ms cubic-bezier(0.32,0,1,1)')),

    ]),
  ],
})
export class CurtainComponent implements AfterViewInit, OnInit {
  @Output()
  connectToMetamask = new EventEmitter();
  @Input()
  loading = false;
  preparingGraphics = false;
  @ViewChild('container') vantaElement: ElementRef;
  constructor() { }
  ngAfterViewInit(): void {
          import('three').then((three) => {
      console.log('three loaded');
      (window as any).THREE = three;
                        this.preparingGraphics = false;

      import('node_modules/vanta/src/vanta.globe').then((vanta) => {
        vanta.default({
          el: this.vantaElement.nativeElement,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x7f3bb1,
          THREE: three
        });

      });
    });
    
  }

  ngOnInit() {
    // import 3d graphics
    this.preparingGraphics = false;
  }

  connect() {
    this.connectToMetamask.next();
  }
}
