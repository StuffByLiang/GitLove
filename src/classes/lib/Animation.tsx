import { PhoneScheme } from "../../services/PhoneScheme";
import { Binding } from "../core/Binding";
import { Library } from "../core/Library";

export class AnimationLibrary extends Library {

    context: CanvasRenderingContext2D;

    constructor(context: CanvasRenderingContext2D) {
        super();
        this.context = context;
    }

    init(): AnimationLibrary {

        //clock
        //(clock)
        this.addBinding(new Binding(
            'clock',
            this.clock.bind(this),
            0,
            0
        ));

        this.addBinding(new Binding(
            'animate-heart',
            this.animateHeart.bind(this),
            0,
            0
        ));



        return this;

    }



    clock() {
        var now = new Date();
        this.context.save();
        this.context.clearRect(0, 0, 150, 150);
        this.context.translate(75, 75);
        this.context.scale(0.4, 0.4);
        this.context.rotate(-Math.PI / 2);
        this.context.strokeStyle = 'black';
        this.context.fillStyle = 'white';
        this.context.lineWidth = 8;
        this.context.lineCap = 'round';

        // Hour marks
        this.context.save();
        for (var i = 0; i < 12; i++) {
            this.context.beginPath();
            this.context.rotate(Math.PI / 6);
            this.context.moveTo(100, 0);
            this.context.lineTo(120, 0);
            this.context.stroke();
        }
        this.context.restore();

        // Minute marks
        this.context.save();
        this.context.lineWidth = 5;
        for (i = 0; i < 60; i++) {
            if (i % 5 != 0) {
                this.context.beginPath();
                this.context.moveTo(117, 0);
                this.context.lineTo(120, 0);
                this.context.stroke();
            }
            this.context.rotate(Math.PI / 30);
        }
        this.context.restore();

        var sec = now.getSeconds();
        var min = now.getMinutes();
        var hr = now.getHours();
        hr = hr >= 12 ? hr - 12 : hr;

        this.context.fillStyle = 'black';

        // write Hours
        this.context.save();
        this.context.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
        this.context.lineWidth = 14;
        this.context.beginPath();
        this.context.moveTo(-20, 0);
        this.context.lineTo(80, 0);
        this.context.stroke();
        this.context.restore();

        // write Minutes
        this.context.save();
        this.context.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
        this.context.lineWidth = 10;
        this.context.beginPath();
        this.context.moveTo(-28, 0);
        this.context.lineTo(112, 0);
        this.context.stroke();
        this.context.restore();

        // Write seconds
        this.context.save();
        this.context.rotate(sec * Math.PI / 30);
        this.context.strokeStyle = '#D40000';
        this.context.fillStyle = '#D40000';
        this.context.lineWidth = 6;
        this.context.beginPath();
        this.context.moveTo(-30, 0);
        this.context.lineTo(83, 0);
        this.context.stroke();
        this.context.beginPath();
        this.context.arc(0, 0, 10, 0, Math.PI * 2, true);
        this.context.fill();
        this.context.beginPath();
        this.context.arc(95, 0, 10, 0, Math.PI * 2, true);
        this.context.stroke();
        this.context.fillStyle = 'rgba(0, 0, 0, 0)';
        this.context.arc(0, 0, 3, 0, Math.PI * 2, true);
        this.context.fill();
        this.context.restore();

        this.context.beginPath();
        this.context.lineWidth = 14;
        this.context.strokeStyle = '#325FA2';
        this.context.arc(0, 0, 142, 0, Math.PI * 2, true);
        this.context.stroke();

        this.context.restore();
        window.requestAnimationFrame(this.clock.bind(this));
        return PhoneScheme.undef;
    }




    animateHeart() {
        // Cubic curves example
        var i = 0;
        var j = 0.1, t = 0;
        var col = new Array('green', 'blue', 'red', 'cyan', 'magenta', 'yellow');

        const repeat = () => {
            t = t + 1;
            i = i + j;
            if (t > 5) { 
                t = 0; 
            }
            var x = 250 + 160 * Math.sin(i) * Math.sin(i) * Math.sin(i);
            var y = -(-170 + 10 * (13 * Math.cos(i) - 5 * Math.cos(2 * i) - 2 * Math.cos(3 * i) - Math.cos(4 * i)));
            this.context.beginPath();
            this.context.moveTo(250, 200);
            this.context.lineTo(x, y);
            this.context.lineCap = 'round';
            this.context.strokeStyle = 'rgba(0,0,255,0.6)';
            this.context.stroke();
            this.context.beginPath();
            this.context.moveTo(250, 200);
            this.context.arc(x, y, 8, 0, 2 * Math.PI);
            this.context.fillStyle = col[t];
            this.context.fill();
            if (i > 6.5) { 
                j = -0.1; 
                // this.context.clearRect(0, 0, 500, 400); 
            }
            if (i < -0.1) {
                j = 0.1; 
                // this.context.clearRect(0, 0, 500, 400);
            }
        };
        window.setInterval(repeat.bind(this), 300);
        return PhoneScheme.undef;
    }



}


