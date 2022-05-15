class Ball extends GameObject {
    ySpeed = 25;
    xSpeed = 5;
    onDyingCallback;

    constructor(x = 0, y = 0, radius=10, onDyingCallback=null) {
        super(x, y);
        this.onDyingCallback = onDyingCallback;
    }

    update(maxX, maxY) {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 - this.width) {
            this.x = 0;
            this.xSpeed = -this.xSpeed;
        }

        if(this.x >= maxX - this.width) {
            this.x = maxX - this.width;
            this.xSpeed = -this.xSpeed;
        }
        
        if(this.y < 0 - this.height) {
            this.y = 0;
            this.ySpeed = -this.ySpeed;
        }
        
        if(this.y >= maxY - this.height) {
            this.y = maxY - this.height;
            this.ySpeed = -this.ySpeed;
            
            if(typeof this.onDyingCallback == "function") {
                this.onDyingCallback();
            }else{
                throw new Error("Ball has hit the bottom of the board");
            }
        }
    }

    draw(context) {
        context.beginPath();
        context.fillStyle = this.fillColor;
        context.strokeStyle = this.strokeColor;
        context.arc(this.x, this.y, this.height, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
    }

    checkCollision(x1, x2, y1, y2) {
        if(this.y + this.height > y1) {
            if(this.x + this.width > x1 && this.x + this.width < x2 || this.x < x2 && this.x > x1) {
                this.ySpeed = -this.ySpeed;
                return true;
            }
        }
        return false;
    }
}