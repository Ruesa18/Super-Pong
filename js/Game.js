class Game {
    context;
    gameInterval;
    intervalTime = 30;
    gameObjects = [];
    sizeX;
    sizeY;
    $canvas;
    board;
    boardHitCounter = 0;
    speedIncreasedCounter = 0;

    constructor($canvas, sizeX, sizeY, board) {
        this.context = $canvas.getContext("2d");
        this.$canvas = $canvas;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.board = board;
    }

    start() {
        this.gameInterval = setInterval(() => {
            this.tick()
        }, this.intervalTime);
    }

    tick() {
        this.clear();

        this.board.update(this.sizeX, this.sizeY);
        this.board.draw(this.context);

        for(let gameObject of this.gameObjects) {
            this.applySpecialMode(gameObject);

            gameObject.update(this.sizeX, this.sizeY);
            gameObject.draw(this.context);

            let collidedWithBoard = gameObject.checkCollision(this.board.x, this.board.x + this.board.width, this.board.y, this.board.y + this.board.height);

            if(collidedWithBoard) {
                this.boardHitCounter++;
            }
        }
    }

    applySpecialMode(gameObject) {
        if(this.boardHitCounter >= 10) {
            if(gameObject.y <= this.sizeY * 0.6) {
                if(this.generateRandomInt(0, 100) <= 5) {
                    gameObject.xSpeed = this.generateRandomInt(-15, 15);
                }
            }

            if(this.boardHitCounter % 5 == 0) {
                if(this.speedIncreasedCounter == 0) {
                    gameObject.ySpeed = gameObject.ySpeed * 1.1;
                }
                this.speedIncreasedCounter++;
                if(this.speedIncreasedCounter % 50 == 0) {
                    gameObject.ySpeed = gameObject.ySpeed * 1.1;
                }
            }
        }
    }

    generateRandomInt(min = 0, max = 100) {
        let difference = max - min;
        let number = Math.random();

        number = Math.floor( number * difference);

        return number + min;
    }

    onMouseMoved(event) {
        let pos = this.getMousePos(event);
        this.cleanPosition(pos);

        this.board.updatePosition(pos.x);
    }

    onBallDied() {
        this.stop();
        console.log("Game ended");
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