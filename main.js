let c = document.getElementById('canvas');
let ctx = c.getContext('2d');
let background = new Image();
let yourAirPlane = new Image();
let ufo1 = new Image();
let rocketSmall = new Image();
let ufo2 = new Image();
rocketSmall.src = './rockesmall.gif';
background.src = "./background.png";
yourAirPlane.src = "./yourAirPlane.gif";
ufo1.src = "./ufo.gif";
ufo2.src = "./ufo1.gif";


let demoPlane = new YourAirplane();

function runGame() {
    ctx.drawImage(background, 0, 0, 1900, 800);
    ctx.drawImage(yourAirPlane, demoPlane.x, demoPlane.y, 200, 200);
    for (let i = 0, j = 0; j < rocket.length, i < ufo.length; j++, i++) {
        ctx.drawImage(ufo1, ufo[i].x, ufo[i].y, 200, 200);
        ufo[i].x -= 2;
        if (ufo[i].x === window.innerWidth / 2) {
            ufo.push({
                x: window.innerWidth - 200,
                y: Math.floor(Math.random() * (window.innerHeight - 200))
            })
        }
        if (ufo[i].x < -150) {
            ufo.splice(i, 1)
        }
        if (rocket.length>0) {
            ctx.drawImage(rocketSmall, rocket[j].x, rocket[j].y, 100, 50);
            rocket[j].x += 50;
            console.log(ufo[i].x)
            if (rocket[j].x > window.innerWidth) {
                rocket.splice(j, 1);
            }
            // if (rocket[j].x === ufo[i].x) {
            //     ufo.splice(i, 1);
            //     rocket.splice(j, 1)
            // }
        }


    }


    requestAnimationFrame(runGame);
}


runGame();

window.addEventListener("click", fight);
window.addEventListener("mousemove", function move(e) {
    if (demoPlane.x >= 0 && demoPlane.x <= 1900) {
        demoPlane.x = e.x - 100;
        demoPlane.y = e.y - 100;
    }
    if (demoPlane.x < 0 || demoPlane.x > 1700) {
        demoPlane.x = 0;
        demoPlane.y = e.y - 100;


    }
    if (demoPlane.y <= 0 && demoPlane.x >= 0) {
        demoPlane.x = e.x - 100;
        demoPlane.y = -20;

    }
    if (demoPlane.y > window.innerHeight - 200) {
        demoPlane.x = e.x - 100;
        demoPlane.y = window.innerHeight - 250;
    }
});