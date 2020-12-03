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
fire.src = "./fire.gif"
let khoangCachHaiUfo = 400;
let ufoSpeed = 5;

function runGame() {
    ctx.drawImage(background, 0, 0, 1900, 800);
    ctx.drawImage(yourAirPlane, demoPlane.x, demoPlane.y, 200, 200);
    demoPlane.y += demoPlane.dropDownSpeed;
    for (let i = 0; i < ufo.length; i++) {
        ctx.drawImage(ufo1, ufo[i].x, ufo[i].y, 200, 200);
        ctx.drawImage(fire, ufo[i].x-15, ufo[i].y + khoangCachHaiUfo+80, 200, 200);
        ctx.drawImage(ufo2, ufo[i].x, ufo[i].y + khoangCachHaiUfo, 200, 200);
        ufo[i].x -= ufoSpeed;
        if (ufo[i].x === Math.floor(window.innerWidth / 2)) {
            ufo.push({
                x: window.innerWidth - 200,
                y: Math.floor(Math.random() * (800 - ufo2.height - khoangCachHaiUfo))
            })
        }
        if (ufo[i].x < -150) {
            ufo.splice(i, 1)
        }
        if (Math.floor(demoPlane.y) > window.innerHeight) {
            demoPlane.y = -50;
        }
        if (demoPlane.checkLose(i) === false) {
            // ctx.drawImage(gameOver,900,300,300,300);
            alert('Game Over \n Your Score: ' + demoPlane.score);
            demoPlane.score = 0;
            demoPlane.showScore(demoPlane.score);
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
                demoPlane.move();
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