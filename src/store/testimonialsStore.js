import {makeAutoObservable} from "mobx";

export default class TestimonialsStore{
    constructor() {
        this._testimonials = []
        makeAutoObservable(this)
    }
    setTestimonials(testimonials){
        this._testimonials.splice(0,this._testimonials.length)
        this._testimonials.reverse()
        testimonials.forEach((elem, index) => {
            elem.id = index + 1;
        });
        for (const n of testimonials) {
            this._testimonials.push(n)
        }

    }
    AddTestimonials(testimonials){
        this._testimonials.push(testimonials)
    }

    EditTestimonials(edit){
        this._testimonials[this._testimonials.map(elem=>{return elem._id}).indexOf(edit._id)] = edit
    }
    getTestimonials(){
        return this._testimonials;
    }
}

