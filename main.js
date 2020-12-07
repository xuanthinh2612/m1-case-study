let c = document.getElementById('canvas');
let ctx = c.getContext('2d');
let background = new Image();
let yourAirPlane = new Image();
let ufo1 = new Image();
let ufo2 = new Image();
let fire = new Image();
background.src = "./background.png";
yourAirPlane.src = "./yourAirPlane.gif";
ufo1.src = "./ufo.gif";
ufo2.src = "./ufo1.gif";
fire.src = "./fire.gif";
let gameAreaHeight =800;
const size = 200;

function runGame() {
    ctx.drawImage(background, 0, 0, 1900, 800);
    ctx.drawImage(yourAirPlane, demoPlane.x, demoPlane.y, size, size);
    demoPlane.y += demoPlane.dropDownSpeed;
    for (let i = 0; i < demoUfo.ufo.length; i++) {
        ctx.drawImage(ufo1, demoUfo.ufo[i].x, demoUfo.ufo[i].y, size, size);
        ctx.drawImage(fire, demoUfo.ufo[i].x - 15, demoUfo.ufo[i].y + demoUfo.distance + 80, size, size+100);
        ctx.drawImage(ufo2, demoUfo.ufo[i].x, demoUfo.ufo[i].y + demoUfo.distance, size, size);
        demoUfo.ufo[i].x -= demoUfo.speed;
        demoUfo.autoAdd(i);
        demoUfo.cutting(i);
        if (Math.floor(demoPlane.y) > window.innerHeight) {
            demoPlane.y = -50;
        }
        if (demoPlane.checkLose(i,demoUfo) === false) {
            // ctx.drawImage(gameOver,900,300,300,300);
            alert('Game Over \n Your Score: ' + demoPlane.score);
            demoPlane.score = 0;
            demoPlane.showScore(demoPlane.score);
            location.reload();
        } else {
            demoPlane.score += 1;
            demoPlane.showScore(demoPlane.score);
        }


    }
    requestAnimationFrame(runGame);
}


runGame();
window.addEventListener("keydown", function (evt) {
        switch (evt.keyCode) {
            case 32 :
                demoPlane.moveUp();
        }
    }
)


// window.addEventListener("mousemove", function move(e) {
//     if (demoPlane.x >= 0 && demoPlane.x <= 1900) {
//         demoPlane.x = e.x - 100;
//         demoPlane.y = e.y - 100;
//     }
//     if (demoPlane.x < 0 || demoPlane.x > 1700) {
//         demoPlane.x = 0;
//         demoPlane.y = e.y - 100;
//
//
//     }
//     if (demoPlane.y <= 0 && demoPlane.x >= 0) {
//         demoPlane.x = e.x - 100;
//         demoPlane.y = -20;
//
//     }
//     if (demoPlane.y > window.innerHeight - 200) {
//         demoPlane.x = e.x - 100;
//         demoPlane.y = window.innerHeight - 250;
//     }
// });