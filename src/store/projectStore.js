import {makeAutoObservable, observable, action} from "mobx";
export default class ProjectStore{
    constructor() {
        this._project = []
        makeAutoObservable(this)
    }
    setProject(project){
        project.reverse();
        project.forEach((elem, index) => {
            elem.id = index + 1;
        });
        this._project.splice(0,this._project.length)
        for (const n of project) {
            this._project.push(n)
        }


    }
    AddProject(project){
        this._project.push(project)
    }
    EditProject(edit){
        this._project[this._project.map(elem=>{return elem._id}).indexOf(edit._id)] = edit
    }
    getProject(){
        return this._project;
    }
}

