import {makeAutoObservable} from "mobx";

export default class CareersStore{
    constructor() {
        this._careers = []
        makeAutoObservable(this)
    }
    setCareers(careers){
        this._careers.splice(0,this._careers.length)
        for (const n of careers) {
            this._careers.push(n)
        }
        this._careers.reverse();
        this._careers.forEach((elem, index) => {
            elem.id = index + 1;
        });
    }
    AddCareers(careers){
        this._careers.push(careers)
    }
    EditCareers(edit){
        this._careers[this._careers.map(elem=>{return elem._id}).indexOf(edit._id)] = edit
    }
    getCareers(){
        return this._careers;
    }
}

