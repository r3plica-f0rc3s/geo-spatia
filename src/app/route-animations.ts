import { animate, group, query, style } from "@angular/animations";

function slideTo() {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        tran: 'absolute',
        top: 0,
        width: '100%'
      })
    ], optional),
    // query(':enter', [
    //   style({ [direction]: '-100%'})
    // ]),
    group([
      // query(':leave', [
      //   animate('600ms ease', style({ [direction]: '100%'}))
      // ], optional),
      // query(':enter', [
      //   animate('600ms ease', style({ [direction]: '0%'}))
      // ])
    ]),
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    // query(':leave', animateChild()),
    // query(':enter', animateChild()),
  ];
}
