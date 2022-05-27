import {makeAutoObservable} from "mobx";

export default class CourseStore{
    constructor() {
        this._course = []
        makeAutoObservable(this)
    }
    setCourse(course){
        this._course.splice(0,this._course.length)
        for (const n of course) {
            this._course.push(n)
        }
        this._course.reverse();
        this._course.forEach((elem, index) => {
            elem.id = index + 1;
        });
    }
    AddCourse(course){
        this._course.push(course)
    }
    EditCourse(edit){
        this._course[this._course.map(elem=>{return elem._id}).indexOf(edit._id)] = edit
    }
    getCourse(){
        return this._course;
    }
}

