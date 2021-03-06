class Board extends GameObject {

    update(maxX, maxY) {

    }

    draw(context) {
        context.beginPath();
        context.fillStyle = this.fillColor;
        context.strokeStyle = this.strokeColor;
        context.rect(this.x, this.y, this.width, this.height);
        context.fill();
        context.stroke();
    }

    updatePosition(x) {
        this.x = x - this.width / 2;
    }
}