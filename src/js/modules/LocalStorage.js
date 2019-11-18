class LocalStorage {
    constructor (name){
        this.name = name;
    }

    save(arr) {
        localStorage.setItem(this.name, JSON.stringify(arr));
    }

    get() {
        let a = this.name === 'cost'?[]:{};
        return JSON.parse(localStorage.getItem(this.name)) || a;
    }
}
export default LocalStorage;
