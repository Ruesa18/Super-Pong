class Ball extends GameObject {
    ySpeed = 25;

    update(gravity, timeEvolved, maxX, maxY) {
        //this.ySpeed += gravity * timeEvolved / 100;

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        this.x = this.x >= maxX - this.width ? maxX - this.width : this.x;
        this.y = this.y >= maxY - this.height ? maxY - this.height : this.y;
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