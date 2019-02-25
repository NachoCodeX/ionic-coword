import { trigger, transition, style, animate, state } from '@angular/animations';

export const slideHeader = trigger('slideHeader', [
    state('in', style({
        transform: 'translateY(0%)',
        opacity: 1
    })),
    state('out', style({
        transform: 'translateY(100%)',
        opacity: 0

    }))



])