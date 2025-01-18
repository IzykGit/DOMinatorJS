import { Controls } from "./classes/Controls.js";
import { HandleGameActors } from "./classes/HandleGameActors.js";
import { Interface } from "./classes/Interface.js";

const canvas = document.getElementById("game-canvas")
const ctx = canvas.getContext("2d")




class Main {
    constructor() {

        this.canvas = canvas;
        this.ctx = ctx;

        this.handleGameActors = new HandleGameActors(canvas, ctx);
        this.controls = new Controls();
        this.interface = new Interface(this.handleGameActors);


        this.paused = false;
    }


    gameLoop(time) {

        if(this.paused) return;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        this.handleGameActors.updateAllActors()

        console.log(time)

        requestAnimationFrame(() => this.gameLoop(time))
    }
}


const game = new Main();

game.gameLoop(0);