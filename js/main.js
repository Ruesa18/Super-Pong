let $playground = document.querySelector("#playground");

let game = new Game($playground, $playground.width, $playground.height);

let ball = new Ball(15, 15);
game.gameObjects.push(ball);

let board = new Board(200, 1000, 10, 200);
game.gameObjects.push(board);

$playground.onmousemove = (ev) => {
    game.onMouseMoved(ev, board);
};

game.start();