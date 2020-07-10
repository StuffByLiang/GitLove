import { createAnimation } from '@ionic/core';


/**
 * λ: (fall EMOJI)
 */

export const animation = createAnimation()
    .addElement(document.querySelector('.square'))
    .duration(1500)
    .fromTo('transform', 'translateY(0px)', 'translateY(200px)');