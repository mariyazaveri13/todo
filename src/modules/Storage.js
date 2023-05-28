export default class Storage{

    static saveToLocalStorge(todoList){
        localStorage.setItem("todoList",JSON.stringify(todoList));
    }

    static getTodoFromLocalStorage(){
        return JSON.parse(localStorage.getItem("todoList"));
    }

    static getProjectList(){
        return JSON.parse(localStorage.getItem("todoList")).projects;
    }
}