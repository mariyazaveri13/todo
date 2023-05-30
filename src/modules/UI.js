import Project from "./Project";
import Logger from "./Logger";
import TodoList from "./TodoList";

const FILE_NAME = 'src/modules/UI.js';
const todoList = new TodoList();

export function defaultProject(){
    const project= new Project('inbox','Inbox');
    todoList.addProjects(project)
    setProjectsInSideBar();
    makeActiveProject('inbox');
}

export function makeActiveProject(ele){

    const btns = document.querySelectorAll('.project-btn');
    btns.forEach((btn)=>{
        btn.onclick = e =>{
            removeClass('.project-btn');
            btn.classList.add('active-project');
            btn.children[1].classList.remove('hide');
            btn.children[1].classList.add('show');
        }
    });

    if(ele){
        const element = document.getElementById(ele);
        element.classList.add('active-project');
        element.children[1].classList.remove('hide');
        element.children[1].classList.add('show');
    }

}

function removeClass(element){
    const ele = document.querySelectorAll(element);
    ele.forEach((e)=>{
        e.classList.remove('active-project');
        e.children[1].classList.add('hide');
        e.children[1].classList.remove('show');
    });
}

export function setProjectsInSideBar(){
    let todoListinner = '';
    todoList.getTodoList().map((p) => {
        todoListinner += `
        <div class="project-btn" id="${p.id}">
            <div>
                <i class="fas fa-solid fa-inbox"></i>
                ${p.name}
            </div>
            <div class="project-btn-del hide">
                <i class="fas fa-solid fa-trash-can"></i>
            </div>
        </div>
        `;

    });

    const sideBarItems = document.getElementById('menuItems');
    sideBarItems.innerHTML = todoListinner;

    makeActiveProject('inbox');
}

function transormToCamelCase(str){
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

export function innitGoals(){
    const submitBtn = document.getElementById('submitBtn');
    const resetBtn = document.getElementById('resetBtn');

    submitBtn.onclick = (e) => handleOnclickCreateGoal();
    resetBtn.onclick = (e) => handleOnclickResetGoal();
}

function handleOnclickCreateGoal(){
    let projectName = document.getElementById('projectName').value;
    const projectId = transormToCamelCase(projectName);

    if(!projectName){
        alert('Please enter a goal');
        return;
    }
    if(todoList.checkValidity(projectId)){
        alert('You cannt enter same goals');
        document.getElementById('projectName').value='';
        return;
    }
    
    const newProject =  new Project(transormToCamelCase(projectId),projectName);

    todoList.addProjects(newProject);
    
    setProjectsInSideBar(todoList.getTodoList());
    document.getElementById('projectName').value="";
}

function handleOnclickResetGoal(){
    document.getElementById('projectName').value = '';
}