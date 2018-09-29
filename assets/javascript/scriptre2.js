window.addEventListener("load", initPlayer2);
function initPlayer2() {
var ul=document.getElementById("songs");
for(var i=0;i<songsArray.length;i++){
    var li=document.createElement("li");
    var span=document.createElement("span");
    var img=document.createElement("img");
    var playIcon=document.createElement("button");
    var btn=document.createElement("button");
    span.innerHTML=songsArray[i].songName;
    span.setAttribute('title', songsArray[i].songId);
    img.setAttribute('src' , songsArray[i].songImage);
    img.className = "cover";
    btn.innerHTML = "<i class='far fa-heart'>";
    btn.className = "btn  playListBtn  ";
    playIcon.className = 'playIcon';
    li.appendChild(img);
    li.appendChild(span);
    li.appendChild(btn);
    li.appendChild(playIcon);
    // playIcon.addEventListener("click", setSongName);
    console.log(li);
    ul.appendChild(li);
    console.log(ul);
    // btn.addEventListener("click", addToPlaylist);

}
}
