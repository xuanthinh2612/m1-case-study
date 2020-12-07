class YourAirplane {
    constructor() {
        this.x = window.innerWidth / 5;
        this.y = window.innerHeight / 3;
        this.score = 0;
        this.dropDownSpeed = 3;
    }
    moveUp () {
        this.y-=100;
    }
    checkLose (i,ufo) {
        if (Math.floor(demoPlane.x)===Math.floor(ufo[i].x)&&Math.floor(demoPlane.y)<Math.floor(ufo[i].y + ufo1.height)
            ||Math.floor(demoPlane.x)+1===Math.floor(ufo[i].x)&&Math.floor(demoPlane.y)<Math.floor(ufo[i].y+ ufo1.height)
            // do su chenh lech size cua anh that va kick thuoc anh trong game;
            ||Math.floor(demoPlane.x) +1 ===Math.floor(ufo[i].x)&&Math.floor(demoPlane.y)>Math.floor(ufo[i].y+ ufo1.height-300) + ufoDistance) {
            return false;
        }
    }
    showScore (value) {
        document.getElementById('score').innerHTML = "Score: " + value;
    }
}

let demoPlane = new YourAirplane();


