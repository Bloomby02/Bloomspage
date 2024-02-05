const containter = document.getElementById("container");

function MBClose(){
 let win = document.createElement('div');
 win.className = "WND";
 win.innerText = "invalid action";
 containter.appendChild(win);
}