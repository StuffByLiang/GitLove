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

        // beat
        // (beat <size> <times>)
        this.addBinding(new Binding(
            'beat',
            this.setBeat.bind(this),
            2,
            2
        ));

        //clock
        //(clock)
        this.addBinding(new Binding(
            'clock',
            this.clock.bind(this),
            0,
            0
        ));

        
        return this;

    }

    setBeat() {
        this.context.clearRect(0, 0, )
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
          if (i % 5!= 0) {
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
        var hr  = now.getHours();
        hr = hr >= 12 ? hr - 12 : hr;
      
        this.context.fillStyle = 'black';
      
        // write Hours
        this.context.save();
        this.context.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) *sec);
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
    }

}

/*



*/
