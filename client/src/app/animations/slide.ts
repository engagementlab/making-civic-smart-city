// import the required animation functions from the angular animations module
import { trigger, animate, style, group, animateChild, query, stagger, transition } from '@angular/animations';
 
export const slideInOutAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideInOutAnimation', [
         
        transition('* <=> *', [
            /* order */
            /* 1 */ 
            query(':enter, :leave', style({ position: 'fixed', width:'100%' })
              , { optional: true }),
            
            /* 2 */ 
            group([  // block executes in parallel
              
              query(':enter', [
                style({ transform: 'translateX(100%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
              ], { optional: true }),
              
              query(
                ':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' })
                 ], { optional: true }),

            ])
        ])

    ]);