const containter = document.getElementById("container");

function MBClose(){
 let win = document.createElement('div');
 win.className = "WND";
 win.innerText = "invalid action";
 containter.appendChild(win);
 document.querySelector(".MB").remove();
}

//#region ENTRY

 const winviewer = document.querySelector(".CLASSviewer");
 
 winviewer.style.transform = "translate(-50%, -50%)";
 winviewer.style.top = "50%";
 winviewer.style.left = "50%";
 winviewer.style.width = "1200px";
 winviewer.style.height = "700px";
 winviewer.style.opacity = "0.9";
 
 const banner = document.createElement('img');
 banner.src = "system/resource/banner/roadblock.svg";
 winviewer.appendChild(banner);
 banner.style.position = "absolute";
 banner.style.top = "50%";
 banner.style.left = "50%";
 banner.style.transform = "translate(-50%, -50%)";

 const text = document.createElement('h1');
 text.innerText = "UNDER CONSTRUCTION";
 winviewer.appendChild(text);

//#endregion