import Project from './Project.js';

export default class TodoList{
    constructor(){
        this.projects = []
        this.projects.push(new Project('Inbox'));
    }

    addProjects(project){
        this.projects.push(project);
    }

    getTodoList(){
        return this.projects;
    }
}