let $playground = document.querySelector("#playground");

let board = new Board(200, 1000, 10, 200);
let game = new Game($playground, $playground.width, $playground.height, board);

let ball = new Ball(15 + 1500, 15, 10, () => {game.onBallDied()});
game.gameObjects.push(ball);


$playground.onmousemove = (ev) => {
    game.onMouseMoved(ev);
};

game.start();