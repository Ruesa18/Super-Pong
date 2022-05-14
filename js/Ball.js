class Ball extends GameObject {

    update(gravity, timeEvolved, maxX, maxY) {
        this.ySpeed += gravity * timeEvolved / 100;

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
}