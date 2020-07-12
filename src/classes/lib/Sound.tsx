import { PhoneScheme } from "../../services/PhoneScheme";
import { Binding } from "../core/Binding";
import { Library } from "../core/Library";
import useSound from 'use-sound';

const fartSound = '/assets/sound/nitrome.mp3';

export class SoundLibrary extends Library {

    context: CanvasRenderingContext2D;

    constructor(context: CanvasRenderingContext2D) {
        super();
        this.context = context;
    }

    init(): SoundLibrary {

        // sound-fart
        // (sound-fart)
        this.addBinding(new Binding(
            'sound-fart',
            this.soundFart.bind(this),
            0,
            0
        ));


         // sound-love
        // (sound-fart)
        this.addBinding(new Binding(
            'sound-love',
            this.loveSound.bind(this),
            0,
            0
        ));

        return this;

    }


    soundFart([]) {
        useSound(fartSound);
        alert("hehehehehe");
    }


    loveSound() {

        <audio id="audio" src="/assets/sounds/fart.mp3" controls>
        </audio>
        alert("yolo");
    }

}

/*



*/
