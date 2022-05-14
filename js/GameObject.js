class GameObject {
    x;
    y;
    height;
    width;
    xSpeed = 0;
    ySpeed = 0;
    fillStyle = "#000";
    strokeStyle = "#000";

    constructor(x = 0, y = 0, height = 10, width = 10) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }

    update(gravity, timeEvolved, maxX, maxY) {
        throw new Error("Method 'update()' not implemented!");
    }

    draw(context) {
        throw new Error("Method 'update()' not implemented!");
    }

    checkCollision(x1, x2, y1, y2) {
        throw new Error("Method 'checkCollision()' not implemented!");
    }
}