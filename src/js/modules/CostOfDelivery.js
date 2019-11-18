import LocalStorage from './LocalStorage.js';

class CostOfDelivery {

    setItem(formData) {
        let local = new LocalStorage('cost');
        let list = local.get();
        list.push(formData);
        local.save(list);
    }

    getItem() {
        return new LocalStorage('cost').get();
    }

}
export default CostOfDelivery;
