var canvas;
var stage: createjs.Stage;
var helloText: createjs.Text;

function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    main();

}

function gameLoop() {
    helloText.x++;
    helloText.y++;
    stage.update();

}

function main() {
     helloText = new createjs.Text("HelloWorld!", "40px Consolas", "#000000");
    stage.addChild(helloText);

}