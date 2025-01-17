
const canvas = document.getElementById("game-canvas")
const ctx = canvas.getContext("2d")


class Main {
    constructor() {

        this.canvas = canvas;
        this.ctx = ctx;


        this.paused = true;
    }


    gameLoop(time) {

        if(this.paused) return;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        requestAnimationFrame(() => this.gameLoop(time))
    }
}


const game = new Main();

game.gameLoop(0);