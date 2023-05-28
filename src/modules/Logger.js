export default {
    log: function(msg,file =__filename){
        console.log(
            new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() 
            +' ::: ' + file + ' ::: ' +msg);
    },
    error:function(msg,file =__filename){
        console.error(
            new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() 
            +' ::: ' + file + ' ::: ' +msg);
    },
    stringy:function(msg,obj,file =__filename){
        console.log(
            new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() 
            +' ::: ' + file + ' ::: ' +msg+" ==> "+JSON.stringify(obj));
    },
    colorLog:function(msg,file =__filename,color='green',obj){
        if(obj)
            console.log('%c'+
            new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() 
            +' ::: ' + file + ' ::: ' +msg+" ==> "+JSON.stringify(obj),`color:${color}; font-size:40px`);

        else
            console.log('%c'+
            new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() 
            +' ::: ' + file + ' ::: ' +msg,`color:${color}; font-size:40px`);

     }
}