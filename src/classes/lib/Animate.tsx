import { PhoneScheme } from "../../services/PhoneScheme";
import { Binding } from "../core/Binding";
import { Library } from "../core/Library";


export class AnimateLibrary extends Library {

    element: HTMLDivElement;

    constructor(element: HTMLDivElement) {
        super();
        this.element = element;
    }

    init(): AnimateLibrary {
        
        
        //emoji rain
        this.addBinding(new Binding(
            'rain',
            this.animRain.bind(this),
            1,
            1
        ));

        return this;
    }

    animRain([emoji]) {
    }
}