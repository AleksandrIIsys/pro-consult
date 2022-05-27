import {makeAutoObservable} from "mobx";

export default class SliderStore{
    constructor() {
        this._partners = []
        makeAutoObservable(this)
    }
    setSlider(partners){
        this._partners.splice(0,this._partners.length)
        for (const n of partners) {
            this._partners.push(n)
        }
        this._partners.reverse();
        this._partners.forEach((elem, index) => {
            elem.id = index + 1;
        });
    }
    AddSlider(partners){
        this._partners.push(partners)
    }

    EditSlider(edit){
        this._partners[this._partners.map(elem=>{return elem._id}).indexOf(edit._id)] = edit
    }
    getSlider(){
        return this._partners;
    }
}

