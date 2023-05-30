import Project from './Project.js';

export default class TodoList{
    constructor(){
        this.projects = []
        //this.projects.push(new Project('inbox','Inbox'));
    }

    addProjects(project){
        this.projects.push(project);
    }

    getTodoList(){
        return this.projects;
    }

    getProject(projectId){
        return this.projects.find((p)=>{
            return p.id === projectId
        });
    }

    checkValidity(projectId){
        return this.getTodoList().some((project) => {
            return project.id === projectId;
        });
    }
}