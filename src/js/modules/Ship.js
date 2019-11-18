import Transport from './Transport.js';
import LocalStorage from "./LocalStorage.js";

class Ship extends Transport {

    constructor(id) {
        super(id);
        if (id) {
            this.result = new LocalStorage('transport').get();
            this.result = this.result.ships.find((item) => item.id === this.id);
            let { iddd, model, name, producedYear, capacity, averageSpeed, countOfTeam } = this.result;
            this.model = model;
            this.name = name;
            this.producedYear = producedYear;
            this.capacity = capacity;
            this.averageSpeed = averageSpeed;
            this.countOfTeam = countOfTeam;
        }
    }

    showAvarageSpeed() {
        return this.avarageSpeed;
    }

    getShipList() {
        let listTransport = new LocalStorage('transport').get();
        return listTransport.ships || [];
    }
}

export default Ship;
