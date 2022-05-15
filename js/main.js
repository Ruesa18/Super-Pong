let $playground = document.querySelector("#playground");

let board = new Board(200, 1000, 15, 300);
board.fillColor = "#00FF00";
board.strokeColor = "#008C00";
let game = new Game($playground, $playground.width, $playground.height, board);

let ball = new Ball(15 + 1500, 15, 20, () => {game.onBallDied()});
ball.fillColor = "#FF0000";
ball.strokeColor = "#8C0000";
game.gameObjects.push(ball);


$playground.onmousemove = (ev) => {
    game.onMouseMoved(ev);
};

game.start();