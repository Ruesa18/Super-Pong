class Game {
    context;
    gameInterval;
    intervalTime = 50;
    gameObjects = [];
    gravity = 4.905;
    sizeX;
    sizeY;
    $canvas;

    constructor($canvas, sizeX, sizeY) {
        this.context = $canvas.getContext("2d");
        this.$canvas = $canvas;
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

    onMouseMoved(event, board) {
        let pos = this.getMousePos(event);
        this.cleanPosition(pos);

        board.updatePosition(pos.x);
    }

    getMousePos(event) {
        let rect = this.$canvas.getBoundingClientRect();
        let scaleX = this.$canvas.width / rect.width;
        let scaleY = this.$canvas.height / rect.height;

        return {
            x: (event.clientX - rect.left) * scaleX,
            y: (event.clientY - rect.top) * scaleY
        }
    }

    cleanPosition(position) {
        position.x = position.x < 0 ? 0 : position.x;
        position.x = position.x > this.sizeX ? this.sizeX : position.x;

        position.y = position.y < 0 ? 0 : position.y;
        position.y = position.y > this.sizeY ? this.sizeY : position.y;
    }

    stop() {
        clearInterval(this.gameInterval);
    }

    clear() {
        this.context.clearRect(0, 0, this.sizeX, this.sizeY);
    }
}