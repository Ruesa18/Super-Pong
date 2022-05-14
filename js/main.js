let $playground = document.querySelector("#playground");

let game = new Game($playground.getContext("2d"), $playground.width, $playground.height);

let ball = new Ball(15, 15);
game.gameObjects.push(ball);

game.start();