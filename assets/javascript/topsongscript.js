window.addEventListener("load",initial);
function initial(){
for(var i=0;i<topsongsArray.length,i++){
    var tli=document.createElement("tli");
    var timg=document.createElement("timg");
    tspan.innerHTML=topsongsArray[i].tsongName;
    tspan.setAttribute=('title',topsongsArray[i].songId);
    timg.setAttribute=('src',topsongsArray[i].songName);
    timg.className="tcover";
    tli.appendChild(timg);
    tli.appendChild(tspan);
    tli.appendChild(playIcon);
    playIcon.addEventListener("click",setSongName);
    console.log(tli);


    
}
}