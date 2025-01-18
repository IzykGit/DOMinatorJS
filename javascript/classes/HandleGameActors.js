import { Player } from "./Player.js";


export class HandleGameActors {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.objects = [];
        this.entities = [];
        this.consumables = [];

        this.allActors = [...this.objects, ...this.entities, ...this.consumables]

        this.eventBus = new EventTarget();

        this.gravityConstant = 0.93;
    }

    createEntity() {
        const playerWidth = 4;
        const playerHeight = 8;

        const randomX = Math.floor(Math.random() * (this.canvas.width - playerWidth));
        const randomY = Math.floor(Math.random() * (this.canvas.height - playerHeight));

        this.entities.push(new Player(randomX, randomY, "blue"))
        console.log(this.entities)
    }


    // Applies gravity to whatever was selected on screen;
    applyGravityToSelection() {
        this.actor.velocityY += this.gravityConstant * this.actor.mass;
        this.actor.y += this.actor.velocityY;

 

        if (this.actor.y + this.actor.height > this.canvas.height) {
            this.actor.y = this.canvas.height - this.actor.height;
            this.actor.velocityY = 0;
        }

    }


    // Applies inertia to whatever was selected on screen;
    applyInertiaToSelection() {

    }


    drawActors() {
        for(let i = 0; i < this.entities.length; i++) {
            this.ctx.fillStyle = this.entities[i].color;
            this.ctx.fillRect(this.entities[i].x, this.entities[i].y, this.entities[i].width, this.entities[i].height)
        }

    }


    updateAllActors() {
        this.drawActors()
    }
}

