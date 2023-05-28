export default class Task{
    constructor(id,name,detail,date){
        this.id=id;
        this.name = name;
        this.status = false;
        this.detail = detail;
        this.date = date;
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getStatus(){
        return this.status;
    }

    setStatus(status){
        this.status = status;
    }

    getDetail(){
        return this.detail;
    }

    setDetail(detail){
        this.detail = detail;
    }

    getDate(){
        return this.date;
    }

    setDate(date){
        this.date = date;
    }
}