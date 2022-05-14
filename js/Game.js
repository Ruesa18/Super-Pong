class Game {
    context;
    gameInterval;
    intervalTime = 500;
    gameObjects = [];
    gravity = 9.81;
    sizeX;
    sizeY;

    constructor(context, sizeX, sizeY) {
        this.context = context;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }

    start() {
        this.gameInterval = setInterval(() => {
            this.tick()
        }, this.intervalTime);
    }

    tick() {
        this.clear();

        for(let gameObject of this.gameObjects) {
            gameObject.update(this.gravity, this.intervalTime, this.sizeX, this.sizeY);
            gameObject.draw(this.context);
        }
    }

    stop() {
        clearInterval(this.gameInterval);
    }

    clear() {
        this.context.clearRect(0, 0, this.sizeX, this.sizeY);
    }
}