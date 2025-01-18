import { Drawable } from "./Drawable.js";


export class Player extends Drawable {
    constructor(x, y, color) {
        super(x, y)
        this.color = color;

        this.width = 4;
        this.height = 8;

        this.eventBus = new EventTarget();
    }



}