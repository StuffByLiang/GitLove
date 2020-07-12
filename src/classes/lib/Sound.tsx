import { PhoneScheme } from "../../services/PhoneScheme";
import { Binding } from "../core/Binding";
import { Library } from "../core/Library";

export class SoundLibrary extends Library {

    constructor() {
        super();
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


        this.addBinding(new Binding(
            'sound-marimba',
            this.marimbaSound.bind(this),
            0,
            0
        ));

        this.addBinding(new Binding(
            'sound-win',
            this.winSound.bind(this),
            0,
            0
        ));

        this.addBinding(new Binding(
            'sound-levelclear',
            this.levelclearSound.bind(this),
            0,
            0
        ));

        this.addBinding(new Binding(
            'sound-error',
            this.errorSound.bind(this),
            0,
            0
        ));

        this.addBinding(new Binding(
            'sound-coin',
            this.coinSound.bind(this),
            0,
            0
        ));

        this.addBinding(new Binding(
            'sound-epic',
            this.epicSound.bind(this),
            0,
            0
        ));

        this.addBinding(new Binding(
            'sound-squelch',
            this.squelchSound.bind(this),
            0,
            0
        ));

        this.addBinding(new Binding(
            'sound-wet',
            this.wetSound.bind(this),
            0,
            0
        ));

        this.addBinding(new Binding(
            'sound-loveyou',
            this.loveyouSound.bind(this),
            0,
            0
        ));

        this.addBinding(new Binding(
            'sound-kiss',
            this.kissSound.bind(this),
            0,
            0
        ));

        return this;

    }


    soundFart([]) {
        const fartSound = '/assets/sounds/fart.mp3';
        var audio = new Audio(fartSound);
        audio.play();    
    }

    loveSound() {
        const loveSound = '/assets/sounds/love.wav';
        var audio = new Audio(loveSound);
        audio.play();   
    }

    marimbaSound() {
        const marimbaSound = '/assets/sounds/marimba.mp3';
        var audio = new Audio(marimbaSound);
        audio.play();
    }

    winSound() {
        const winSound = '/assets/sounds/justinvoke.mp3';
        var audio = new Audio(winSound);
        audio.play();
    }

    levelclearSound([]) {
        const levelclearSound = '/assets/sounds/levelclearer.mp3';
        var audio = new Audio(levelclearSound);
        audio.play();
    }

    errorSound() {
        const errorSound = '/assets/sounds/mortisblack.mp3';
        var audio = new Audio(errorSound);
        audio.play();
    }

    coinSound() {
        const coinSound = '/assets/sounds/nitrome.mp3';
        var audio = new Audio(coinSound);
        audio.play();
    }

    epicSound() {
        const epicSound = '/assets/sounds/plasterbrain.mp3';
        var audio = new Audio(epicSound);
        audio.play();
    }

    squelchSound() {
        const squelchSound = '/assets/sounds/squelch.mp3';
        var audio = new Audio(squelchSound);
        audio.play();
    }

    wetSound() {
        const wetSound = '/assets/sounds/wet-click.mp3';
        var audio = new Audio(wetSound);
        audio.play();
    }

    loveyouSound() {
        const loveyouSound = '/assets/sounds/loveyou.mp4';
        var audio = new Audio(loveyouSound);
        audio.play();
    }

    kissSound() {
        const kissSound = '/assets/sounds/kissing.mp4';
        var audio = new Audio(kissSound);
        audio.play();
    }
}

