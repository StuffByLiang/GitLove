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
        this.addBinding(new Binding(
            'color',
            this.setColor,
            1,
            1
        ));

        // Draw Rectancle
        this.addBinding(new Binding(
            'rect',
            this.drawRect,
            4,
            4
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
        this.context.rect(x, y, width, height);
    }

}