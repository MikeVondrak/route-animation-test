import {
  animation,
  style,
  animate,
  trigger,
  transition,
  useAnimation,
  state,
  query,
  stagger,
  group,
  sequence,
  animateChild,
} from '@angular/animations';

// https://www.techiediaries.com/angular-router-animations/

export const routeAnimations = [
  trigger('routeChangeAnimation', [
    transition('* => *', [
      query(
        ':enter', 
        [
          animate('0s linear', 
            style([{
              opacity: 0,
              position: 'absolute',
              //height: '0px'
            }])
          )
        ],
        { optional: true }
      ),
      query(
        ':leave', 
        [
          style({ 
            opacity: 1, 
            //height: '300px' 
          }),
          animate('1s ease-out', 
            style([{
              opacity: 0,
              position: 'absolute',
              //height: '0px'
            }])
          )
        ],
        { optional: true }
      ),
      query(
        ':enter', [
          animate('1s ease-in', 
            style([{
              opacity: 1,
              positon: 'relative',
              //height: '100px'
            }])
          )
        ],
        { optional: true }
      )
    ])
  ]),
  trigger('footerChangeAnimation', [
    transition('* => *', [
      animate('1s ease-out',
        style({
          opacity: 0
        })
      ),
      animate('1s ease-in',
        style({
          opacity: 1
        })
      )
    ])
  ]),
  trigger('slideInOut', [
    state('in', style({
      overflow: 'hidden',
      height: '*',
      //width: '300px'
    })),
    state('out', style({
      opacity: '0',
      overflow: 'hidden',
      height: '0px',
      //width: '0px'
    })),
    transition('in => out', animate('400ms ease-in-out')),
    transition('out => in', animate('400ms ease-in-out'))
  ]),
  trigger('viewportAnimation', [
    // state('hide', style({
    //   opacity: 0,
    // })),
    // state('show', style({
    //   opacity: 1,
    // })),
    transition('* => *', [
      style({ opacity: 0, zIndex: 3 }),
      animate('1s ease', style({ opacity: 1, zIndex: 3 })),
      animate('1s ease', style({ opacity: 0, zIndex: 3 })),
      //style({ opacity: 0, zIndex: 1})
    ])
  ])
];