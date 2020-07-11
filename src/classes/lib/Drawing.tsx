import { Binding } from "../core/Binding";
import { Library } from "../core/Library";

export class DrawingLibrary extends Library {

    context: CanvasRenderingContext2D;

    constructor(context: CanvasRenderingContext2D) {
        super();
        this.context = context;
    }

    init(): DrawingLibrary {

        // Color
        // (color <color>)
        this.addBinding(new Binding(
            'color',
            this.setColor.bind(this),
            1,
            1
        ));

        // Draw Rectancle
        // (rect <x> <y> <width> <height>)
        this.addBinding(new Binding(
            'rect',
            this.drawRect.bind(this),
            4,
            4
        ));

        // Draw Circle
        // (circle <x> <y> <r>)
        this.addBinding(new Binding(
            'circle',
            this.drawCircle.bind(this),
            3,
            3
        ));

        // Draw Heart
        // (heart)
        this.addBinding(new Binding(
            'heart',
            this.drawHeart.bind(this),
            0,
            0
        ));


        // Draw Love
        // (Love)
        this.addBinding(new Binding(
            'love',
            this.drawLove.bind(this),
            0,
            0
        ));



        return this;

    }

    /**
     * Set a new color
     * @param args
     */
    setColor([color]) {
        this.context.fillStyle = color;
    }

    /**
     * Draw a rectangle 
     * @param args
     */
    drawRect([x, y, width, height]) {
        this.context.fillRect(x, y, width, height);
    }

    /**
     * Draw a circle
     * @param args 
     */
    drawCircle([x, y, r]) {
        this.context.arc(x, y, r, 0 * Math.PI, 2 * Math.PI);
    }

    drawHeart() {
        // Cubic curves example
        this.context.beginPath();
        this.context.moveTo(75, 40);
        this.context.bezierCurveTo(75, 37, 70, 25, 50, 25);
        this.context.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        this.context.bezierCurveTo(20, 80, 40, 102, 75, 120);
        this.context.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        this.context.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        this.context.bezierCurveTo(85, 25, 75, 37, 75, 40);
        this.context.fill();
    }


    drawLove() {
        this.context.fillText('😍', 40, 40);
    }


}