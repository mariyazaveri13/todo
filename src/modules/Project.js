export default class Project{
    constructor(id,name){
        this.id = id;
        this.name = name;
        this.task=[];
    }

    getId(){
        return this.id;
    }
}