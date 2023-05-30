// import Logger from "./Logger";
// import TodoList from "./TodoList";

// export default class Storage{

//     constructor(){
//     }

//     static saveToLocalStorge(todoList){
//         localStorage.setItem("todoList",JSON.stringify(todoList));
//     }

//     static getTodoFromLocalStorage(){
//         if(localStorage.getItem("todoList")=='undefined')
//             return undefined;
//         return JSON.parse(localStorage.getItem("todoList"));
//     }

//     static getProjectList(){
//         if(!localStorage.getItem("todoList") || localStorage.getItem("todoList")=='undefined')
//             return undefined;
//         return JSON.parse(localStorage.getItem("todoList"));
//     }

//     static checkValidity(projectId){
//         return this.getProjectList().some((project) => {
//             return project.id === projectId;
//         });
//     }

//     static addProject(project){
//         if(!Storage.getTodoFromLocalStorage() || Storage.getTodoFromLocalStorage() == 'undefined'){
//             //Storage.saveToLocalStorge(todoList.getProject('inbox'));
//         }
//         localStorage.setItem("todoList",JSON.stringify(project));
//     }
// }