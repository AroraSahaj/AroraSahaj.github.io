// window.addEventListener("load", initPlayer);
var audio;
var togglePlay = false;
var togglePlayButton;
var slider;
window.onload = function(){ initPlayer()}
function initPlayer() {
    // console.log(hello);
audio=document.getElementById("audio");
// audio tag ke liye 
var ul=document.getElementById("songs");
slider=document.getElementById("slider");
// slider audio tag me range ke liye
slider.addEventListener("click", seekSong);
togglePlayButton=document.getElementById("playpause");
togglePlayButton.addEventListener("click", toggleSong);
// audio me h 
document.getElementById("stopSong").addEventListener("click", stopSong);
document.getElementById("nextSong").addEventListener( "click", nextSong);
// sidebar me h  
document.getElementById("previousSong").addEventListener( "click", previousSong);
document.getElementById("savePlaylist").addEventListener( "click", savePlayList);
// header me h 
document.getElementById("searchSong").addEventListener( "keyup", searchSong);
document.getElementById("sortPlaylist").addEventListener("click",sortSong);

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
    btn.innerHTML = "Add to Playlist";
    btn.className = "btn btn-primary playListBtn d-block w-100";
    playIcon.className = 'playIcon';
    li.appendChild(img);
    li.appendChild(span);
    li.appendChild(btn);
    li.appendChild(playIcon);
    playIcon.addEventListener("click", setSongName);
    console.log(li);
    ul.appendChild(li);
    console.log(ul);
    btn.addEventListener("click", addToPlaylist);

}

// for(var i=0;i<topsongsArray.length,i++){
//     var tli=document.createElement("tli");
//     var timg=document.createElement("timg");
//     tspan.innerHTML=topsongsArray[i].tsongName;
//     tspan.setAttribute=('title',topsongsArray[i].songId);
//     timg.setAttribute=('src',topsongsArray[i].songName);
//     timg.className="tcover";
//     tli.appendChild(timg);
//     tli.appendChild(tspan);
//     tli.appendChild(playIcon);
//     playIcon.addEventListener("click",setSongName);
//     console.log(tli);


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
// }
loadPlayList();
for(var i=0;i<topsongsArray.length;i++){
    var tli=document.createElement("li");
    var tspan=document.createElement("span");
    var timg=document.createElement("img");
    var playIcon=document.createElement("button");
    tspan.innerHTML=topsongsArray[i].tsongName;
    tspan.setAttribute('title', topsongsArray[i].tsongId);
    timg.setAttribute('src' , topsongsArray[i].tsongImage);
    timg.className='topsongscover';
    playIcon.className = 'playIcon';
    // playIcon.innerHTML = 'hello';
    tli.appendChild(timg);
    tli.appendChild(tspan);
    tli.appendChild(playIcon);
    playIcon.addEventListener("click",setSongName);
    console.log("top songs");
    console.log(timg);
    console.log(tli);
    topsongsplaylist.appendChild(tli);
 }
}
function seekSong(){
    audio.currentTime=slider.value;
}
function setSongName(){
    // console.log(event.srcElement.parentElement.childNodes[0].innerText);
    songName = event.srcElement.parentElement.childNodes[1].innerText;
    playSong(songName);
}

function toggleSong(){
    // toggleplay 
    if(togglePlay){
        audio.play();
        togglePlayButton.innerHTML = '<i class="fas fa-pause"></i>';
        togglePlay = false;
    }
    else 
    {
        audio.pause();
        togglePlayButton.innerHTML = '<i class="fas fa-play"></i>';
        togglePlay = true;

    }
    
}
function stopSong(){
       audio.currentTime = 0;
      audio.pause;

    }
function nextSong(){
    var songId = audio.title;
    var n_song = parseInt(songId)+1;
    var songName;
    console.log(n_song);
    for(var i = 0; i < songsArray.length;i++){
        if(songsArray[i].songId == n_song){
            songName = songsArray[i].songName;
            console.log(n_song,songName);
        }
    }
    playSong(songName);
}
function previousSong(){
    var songId = audio.title;
    var n_song = parseInt(songId)-1;
    var songName;
    console.log(n_song);
    for(var i = 0; i < songsArray.length;i++){
        if(songsArray[i].songId == n_song){
            songName = songsArray[i].songName;
            console.log(n_song,songName);
        }
    }
    playSong(songName);

}
function searchSong() {
    var toSearch = event.srcElement.value;
    if(toSearch == "") {
        loadPlayList();
    }
    obj.searchSong(toSearch);
    showPlayList();
}
// function searchSong(){
//     var toSearch=event.srcElement.value;
//     i
// }
function sortSong(){
    console.log("hello o ");
    obj.sortsong();
    showPlayList();
}

function playSong(songName){
    console.log("Song change");
    var songURL;
    for(var i = 0; i < songsArray.length; i++){
        if(songsArray[i].songName == songName){
            songURL = songsArray[i].songUrl;
            audio.title = songsArray[i].songId;
        }
    }
    togglePlayButton.innerHTML = '<i class="fas fa-pause"></i>';
    audio.src = songURL;
    audio.play();
    // var sliderWidth = slider.offsetWidth;
    setInterval(function(){
        slider.value = audio.currentTime;
    },500);
    setTimeout(function(){
        var duration = audio.duration;
        slider.max = duration;
    },200);
}


function savePlayList(){
    if(window.localStorage){
        var json = JSON.stringify(obj.playList);
        console.log(json);
        localStorage.setItem('myPlaylist', json);

    }
    else{
        alert("LocalStorage not supported ....")
    }
}
function loadPlayList(){
    if(localStorage.myPlayList) {
        var data = localStorage.getItem('myPlayList')
        obj.playList = JSON.parse(data);
    }
    showPlayList()
}
function addToPlaylist(){
    // ye ek bar dobara samaj na h 
var songId=event.srcElement.parentElement.childNodes[1].title;
for(var i=0;i<songsArray.length;i++){
    if(songsArray[i].songId == songId) {
        // ye bhi dekh na h 
obj.addSong(songsArray[i].songId,songsArray[i].songName,songsArray[i].songUrl,songsArray[i].songImage)
    }
}
showPlayList();
}    

function deleteSong(){
    var songId = parseInt(event.srcElement.parentElement.childNodes[1].title);
    console.log(songId);
    obj.deleteSong(songId);
    showPlayList();
}
function showPlayList(){
    var ul = document.getElementById("playList");
    ul.innerHTML = "";
    //ek bar dekh na h 
    obj.playList.forEach(function(s){
        var li = document.createElement("li");
        var span = document.createElement("span");
        var img = document.createElement("img");
           var playIcon = document.createElement("button");
        var btn = document.createElement("button");
        span.innerHTML = s.name;
        span.setAttribute('title', s.id);
        img.setAttribute('src', s.songimage);
        img.className = "coverside";
        btn.innerHTML = '<i class="fas fa-trash dustbin"></i>';
        btn.className = "btn btn-primary deleteBtn";
        playIcon.className = 'playIcon';
        li.className = "list-group-item";
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(btn);
        li.appendChild(playIcon);
        span.addEventListener("click", setSongName);
        playIcon.addEventListener("click", setSongName);
        ul.appendChild(li);
        btn.addEventListener("click", deleteSong);
        
    })
    function showtopsong(){
        // var ul=document.getElementById("topsongsplaylist");
        // ul.innerHTML=" ";
        // var li=document.createElement("li");
        // var img = document.createElement("img");
        // var playIcon = document.createElement("button");
        // var span = document.createElement("span");
        // li.appendChild(img);
        // li.appendChild(span);
        // // li.appendChild(btn);
        // li.appendChild(playIcon);
        // ul.appendChild(li);
        for(var i=0;i<topsongsArray.length;i++){

        }
    }
    // var ul = document.getElementById("playList");
    // ul.innerHTML = "";
    // // console.log("playlist function");
    // obj.playList.forEach(function(s){
    //     // console.log("Creating playlist");
    //     var li = document.createElement("li");
    //     var span = document.createElement("span");
    //     var img = document.createElement("img");
    //     var playIcon = document.createElement("button");
    //     var btn = document.createElement("button");
    //     span.innerHTML = s.name;
    //     span.setAttribute('title', s.id);
    //     img.setAttribute('src', s.songimage);
    //     img.className = "cover";
    //     btn.innerHTML = '<i class="fas fa-trash"></i>';
    //     btn.className = "btn btn-primary deleteBtn";
    //     playIcon.className = 'playIcon';
    //     li.className = "list-group-item";
    //     li.appendChild(img);
    //     li.appendChild(span);
    //     li.appendChild(btn);
    //     li.appendChild(playIcon);
    //     span.addEventListener("click", setSongName);
    //     playIcon.addEventListener("click", setSongName);
    //     ul.appendChild(li);
    //     btn.addEventListener("click", deleteSong);
    // })   
}

