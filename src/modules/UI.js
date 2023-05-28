export function makeActiveProject(){
    const btns = document.querySelectorAll('.project-btn');
    btns.forEach((btn)=>{
        btn.onclick = e =>{
            removeClass('.project-btn');
            btn.classList.add('active-project');
            btn.children[1].classList.remove('hide')
            btn.children[1].classList.add('show')
            console.log(btn.children[1])
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