let player = document.getElementById("player");
let playPause = document.getElementById("playPause");
let index = 0;
let next = document.getElementById("next");
let back = document.getElementById("back");
let goHome = document.getElementById("home");
let like = document.getElementById("like");


let songs = ["1.mp3", "2.mp3", "3.mp3","./song1.mp3","./song2.mp3","./song3.mp3"];
let length = songs.length;

playPause.addEventListener("click", function () {
  if (player.paused) {
    player.src = songs[index];
    player.play();
    playPause.classList.remove("ri-play-fill");
    playPause.classList.add("ri-pause-fill");
  } else {
    player.pause();
    playPause.classList.remove("ri-pause-fill");
    playPause.classList.add("ri-play-fill");
  }
});

player.addEventListener("ended", function () {
  index = index + 1;
  if (index > length - 1) {
    index = 0;
    player.src = songs[index];
    player.play();
  } else {
    player.src = songs[index];
    player.play();
  }
});

function nextSong() {
  index = index + 1;
  if (index > length - 1) {
    index = 0;
    player.src = songs[index];
    player.play();
  } else {
    player.src = songs[index];
    player.play();
  }
}

function backSong() {
  index = index - 1;

  if (index < 0) {
    index = length - 1;
    player.src = songs[index];
    player.play();
  } else {
    player.src = songs[index];
    player.play();
  }
}
goHome.addEventListener("click",function(){
    window.location.href= "https://open.spotify.com/";
})


like.addEventListener("click",function(){
    like.style.opacity = "0.7";
    like.style.color = "#ed4054"
   
})