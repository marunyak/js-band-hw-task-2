import CostOfDelivery from './CostOfDelivery.js';
import LocalStorage from './LocalStorage.js';
import Catalog from './Catalog';

class Buttons {

    constructor (root) {
        this.root = root;
    }

    save(elem) {
        let nameElement = elem.parentElement.parentElement.parentElement;
        if (nameElement.classList.contains('create-transport-ship')) {
            const formData = Catalog.getDataFromForm('.create-transport-ship');
            let local1 = new LocalStorage('transport');
            let list   = local1.get();

            if (!list.ships) list['ships'] = [];
            list.ships.push(formData);
            local1.save(list);

            Catalog.render();
        }
        else if (nameElement.classList.contains('create-transport-track')) {
            const formData = Catalog.getDataFromForm('.create-transport-track');
            let local2 = new LocalStorage('transport');
            let list   = local2.get();

            if (!list.tracks) list['tracks'] = [];
            list.tracks.push(formData);
            local2.save(list);

            Catalog.render();
        }
        else if (nameElement.classList.contains('create-cost-delivery')) {
            const formData = Catalog.getDataFromForm('.create-cost-delivery');
            new CostOfDelivery().setItem(formData);

            Catalog.render();
        }
    }

    cancel(elem) {
        let nameElement = elem.parentElement
                              .parentElement
                              .parentElement;

        nameElement.classList.toggle('show');
        if (nameElement.classList.contains('create-transport-ship'))       Catalog.resetForm('.create-transport-ship');
        else if (nameElement.classList.contains('create-transport-track')) Catalog.resetForm('.create-transport-track');
        else if (nameElement.classList.contains('create-cost-delivery'))   Catalog.resetForm('.create-cost-delivery');
        this.root.classList.toggle('opacity');
        document.body.classList.toggle('stop-scrolling');
    }
}
export default Buttons;
