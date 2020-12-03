class YourAirplane {
    constructor() {
        this.x = window.innerWidth / 5;
        this.y = window.innerHeight / 3;
        this.score = 0;
        this.dropDownSpeed = 3
        this.height = 200;
        this.width = 200;
    }
    move () {
        this.y-=150;
    }

    // broken () {
    //
    // }
    checkLose (i) {
        if (Math.floor(demoPlane.x)===Math.floor(ufo[i].x)&&Math.floor(demoPlane.y)<Math.floor(ufo[i].y + ufo1.height)
            ||Math.floor(demoPlane.x)+1===Math.floor(ufo[i].x)&&Math.floor(demoPlane.y)<Math.floor(ufo[i].y+ ufo1.height)
            ||Math.floor(demoPlane.x) +1 ===Math.floor(ufo[i].x)&&Math.floor(demoPlane.y)>Math.floor(ufo[i].y+ ufo1.height-300) + khoangCachHaiUfo) {
            return false;
        }

    }
    showScore (value) {
        document.getElementById('score').innerHTML = "Score: " + value;
    }

}
let demoPlane = new YourAirplane();
