import Project from "./Project";
import TodoList from "./TodoList";
import Logger from "./Logger";

const FILE_NAME = 'src/modules/UI.js';

export function makeActiveProject(){
    const btns = document.querySelectorAll('.project-btn');
    btns.forEach((btn)=>{
        btn.onclick = e =>{
            removeClass('.project-btn');
            btn.classList.add('active-project');
            btn.children[1].classList.remove('hide')
            btn.children[1].classList.add('show')
        }
    });
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
    const p1 =  new Project("pp");
    const p2 =  new Project("pp");

    console.log(p1);

    const list = new TodoList();

    list.addProjects(p1);
    list.addProjects(p2);

    let lista = list.getTodoList();

    console.log(JSON.stringify(lista));
    Logger.stringy('lista',lista,FILE_NAME);
    Logger.colorLog('sda',FILE_NAME )

    lista.map((p) => {
        const todoListHtml = document.getElementById('todoList')
        todoListHtml.innerHTML=`Hi`;
        console.log(JSON.stringify(p));
        Logger.stringy('objj',p,FILE_NAME);
        Logger.log('aaa aa',FILE_NAME);
    });
}