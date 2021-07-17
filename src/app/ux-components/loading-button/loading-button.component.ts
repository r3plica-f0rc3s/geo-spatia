import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.scss'],
  animations: [
    trigger('disableButton', [
      state('true', style({ width: '300px' })),
      state('false', style({ width: '65px' })),
      transition('false <=> true', animate('500ms ease-out')),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingButtonComponent implements OnInit {
  @Input()
  loading: boolean;
  @Input()
  label: string;
  @Input()
  color = 'primary';
  constructor() { }

  ngOnInit(): void {
  }

}
