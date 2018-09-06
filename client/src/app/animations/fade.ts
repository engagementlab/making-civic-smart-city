// import the required animation functions from the angular animations module
import { trigger, animate, transition, style, query, group } from '@angular/animations';
 
export const fadeInAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeInAnimation', [
 
         transition('* <=> *', [
             group([  // block executes in parallel
                  query(':enter', [
                               // css styles at start of transition
                    style({ opacity: 0 }),
         
                    // animation and styles at end of transition
                    animate('.7s', style({ opacity: 1 }))

                  ], { optional: true }),
                  query(':leave', [
         
                    // animation and styles at end of transition
                    animate('.7s', style({ opacity: 0 }))

                  ], { optional: true }),
                ])
        ])

    ]);