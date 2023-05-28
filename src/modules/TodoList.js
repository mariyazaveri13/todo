import Project from './Project.js';

export default class TodoList{
    constructor(id){
        this.id = id;
        this.projects = []
        this.projects.push(new Project('inbox','Inbox'));
    }

    addProjects(project){
        this.projects.push(project);
    }

    getTodoList(){
        return this.projects;
    }

    getId(){
        return this.id;
    }
}