// let ufo = [];
class Ufo {
    constructor() {
        this.x = window.innerWidth - 200;
        this.y = 0;
        this.ufo = [];
        this.speed = 5;
    }
    autoAdd (i) {
        if (this.ufo[i].x === Math.floor(window.innerWidth / 2)) {
            this.ufo.push({
                x: window.innerWidth - 200,
                y: Math.floor(Math.random() * (gameAreaHeight - ufo2.height - ufoDistance))
            })
        }

    }
    cutting (i) {
        if (this.ufo[i].x < -150) {
            this.ufo.splice(i, 1)
        }
    }

}
let demoUfo = new Ufo();
demoUfo.ufo[0] = {
    x: demoUfo.x,
    y: demoUfo.y
}
