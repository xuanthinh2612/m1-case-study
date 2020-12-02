class YourAirplane {
    constructor() {
        this.x = window.innerWidth / 6;
        this.y = window.innerHeight / 2;
    }
    fight (rocket) {
        rocket[0] = {
            x : this.x,
            y : this.y
        };
         return console.log('ok')
    }

    broken () {

    }
}