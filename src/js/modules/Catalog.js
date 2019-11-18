import Track from './Track.js';
import Ship from './Ship.js';
import LocalStorage from './LocalStorage.js';

class Catalog {

    constructor(to) {
        this.to = to;
    }

    add(...args) {
        let itemCatalog = args.map((item) => `<td>${item}</td>`);
        let item = `<tr>${itemCatalog.join('')}</tr>`;
        document.querySelector(`${this.to} tbody`).innerHTML += item;
    }

    static render() {
        const tableTransport = document.querySelector('.table-transport tbody');
        tableTransport.innerHTML = '';

        const trackk  = new Track();
        //const tracks  = trackk.getTruckList();

        const tracks = trackk.getTruckListAsynAwait();
        tracks.then((result) => {
            if (result) {
                setTimeout(() => {
                    tableTransport.innerHTML += '<tr><td class="table-center" colspan="7">Tracks</td></tr>';
                    result.forEach((item) => {
                        if (item === "Internal error") {
                            tableTransport.innerHTML += '<tr><td class="table-center" colspan="7">Internal error</td></tr>';
                        } else {
                            catalog.add(item.id , item.model, item.licensePlate, item.producedYear, trackk.showCapacityInPounds(item.capacity), item.averageSpeed, item.typeOfGas);
                        }
                    });
                },1000)
            }
            })
            .catch((error) => {
                tableTransport.innerHTML += '<tr><td class="table-center" colspan="7">Tracks</td></tr><tr><td class="table-center" colspan="7">No Items</td></tr>';
            });

        const shipp   = new Ship();
        const ships   = shipp.getShipList();
        const catalog = new Catalog('.table-transport');

        if (ships.length) {
            tableTransport.innerHTML += '<tr><td class="table-center" colspan="7">Ships</td></tr>';
            ships.forEach((item) => {
                catalog.add(item.id , item.model, item.name, item.producedYear, shipp.showCapacityInPounds(item.capacity), item.averageSpeed, item.countOfTeam);
            });
        }

        let listCosts = new LocalStorage('cost').get();

        document.querySelector('.table-costs tbody').innerHTML = '';
        if (listCosts) {
            listCosts.forEach(({ model: model, cargo: cargo, dist: dist }) => new Catalog('.table-costs').add(model, cargo, dist));
        }
    }

    static getDataFromForm(formSelector) {
        const inputs = document.querySelectorAll(formSelector + ' input');
        const formData = {};
        inputs.forEach((el) => {
            const name = el.name.split('-')[1];
            const val  = el.value;
            if (!val || !val.replace(/(<([^>]+)>)/ig,'') || val === null) return !1;

            formData[name] = val;
        })
        Catalog.resetForm(formSelector);

        return formData;
    }

    static resetForm(formSelector) {
        document.querySelectorAll(formSelector+' input').forEach((item) => item.value = null);
    }
}
export default Catalog;
