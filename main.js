let c = document.getElementById('canvas');
let ctx = c.getContext('2d');
let background = new Image();
let yourAirPlane = new Image();
let ufo1 = new Image();
let rocketSmall = new Image();
let ufo2 = new Image();
background.src = "./background.png";
yourAirPlane.src = "./yourAirPlane.gif";
ufo1.src = "./ufo.gif";
ufo2.src = "./ufo1.gif";
let khoangCachHaiUfo


let demoPlane = new YourAirplane();

function runGame() {
    ctx.drawImage(background, 0, 0, 1900, 800);
    ctx.drawImage(yourAirPlane, demoPlane.x, demoPlane.y, 300, 300);
    demoPlane.y+=3;
    for (let i = 0; i < ufo.length; i++) {
        ctx.drawImage(ufo1, ufo[i].x, ufo[i].y, 200, 200);
        ctx.drawImage(ufo2, ufo[i].x, ufo[i].y, 200, 200);
        ufo[i].x -= 10;
        if (ufo[i].x === Math.floor(window.innerWidth / 2)) {
            ufo.push({
                x: window.innerWidth - 200,
                y: Math.floor(Math.random() * (window.innerHeight - 200))
            })
        }
        if (ufo[i].x < -150) {
            ufo.splice(i, 1)
        }
        if(Math.floor(demoPlane.y)>window.innerHeight) {
            demoPlane.y= - 50;
        }


        // if (Math.floor(demoPlane.x)===Math.floor(ufo[i].x)&&Math.floor(demoPlane.y)<Math.floor(ufo[i].y)
        //     ||Math.floor(demoPlane.x)+1===Math.floor(ufo[i].x)&&Math.floor(demoPlane.y)<Math.floor(ufo[i].y)) {
        //     alert('game over');
        // }
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