class Ball extends GameObject {
    ySpeed = 25;
    xSpeed = 5;
    onDyingCallback;

    constructor(x = 0, y = 0, radius=10, onDyingCallback=null) {
        super(x, y, radius, radius);
        this.onDyingCallback = onDyingCallback;
    }

    update(maxX, maxY) {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x <= 0) {
            this.x = 0;
            this.xSpeed = -this.xSpeed;
        }

        if(this.x + this.width / 2 >= maxX) {
            this.x = maxX - this.width / 2;
            this.xSpeed = -this.xSpeed;
        }
        
        if(this.y - this.height / 2 <= 0) {
            this.y = 0 + this.height / 2;
            this.ySpeed = -this.ySpeed;
        }
        
        if(this.y >= maxY - this.height / 2) {
            this.y = maxY - this.height / 2;
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
        context.arc(this.x, this.y, this.height / 2, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
    }

    checkCollision(x1, x2, y1, y2) {
        if(this.y + this.height >= y1) {
            if(this.x + this.width > x1 && this.x + this.width < x2 || this.x < x2 && this.x > x1) {
                this.ySpeed = -this.ySpeed;
                return true;
            }
        }
        return false;
    }
}