let player = document.getElementById("player");
let playPause = document.getElementById("playPause");
let index = 0;
let next = document.getElementById("next");
let back = document.getElementById("back");
let goHome = document.getElementById("home");
let like = document.getElementById("like");
let range = document.getElementById("range");
let mute = document.getElementById("mute");
let audioRange = document.getElementById("audioRange");
let image = document.getElementById("imageMain");
let cross = document.getElementById("cross");
let playlist = document.getElementById("playlist");
let songPlayList = document.getElementById("songPlayList");
let card = document.getElementById("card");
let playListGaana = document.getElementById("playListGaana");
let songTitle = document.getElementById("songTitle");
let songArtist = document.getElementById("songArtist");

console.log(like.classList.contains("red"));

let songs = [
  "1.mp3",
  "2.mp3",
  "3.mp3",
 
];
let images = [
  "https://t4.ftcdn.net/jpg/05/93/48/67/360_F_593486760_vJiyGDLBgTh8Ye7XcnW7VFluhZu44aB4.jpg",
  "https://wallpapers.com/images/featured/paint-splash-q8zxbtz5fbv4spwr.jpg",
  "https://e1.pxfuel.com/desktop-wallpaper/673/493/desktop-wallpaper-paint-splash.jpg",
 
];

let names = ["Bezzati","Husnpari","Iraaday"];
let singers = ["Khullar Ji","UK Bhai","Abdul Haasan"];



let length = songs.length;
songPlayList.addEventListener("click", function(){
    card.style.display = "none";
    playlist.style.display = "block";
    
})
cross.addEventListener("click", function(){
    playlist.style.display = "none";
    card.style.display = "block";

})

playPause.addEventListener("click", function () {
  if (player.paused) {
    player.src = songs[index];
    image.src = images[index];
    songTitle.textContent = `${names[index]}`
    songArtist.textContent = `${singers[index]}`

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
    if(like.classList.contains("red")){
      like.click();
     
    }
    songTitle.textContent = `${names[index]}`
    songArtist.textContent = `${singers[index]}`
    player.src = songs[index];
    image.src = images[index];
    player.play();
  } else {
    if(like.classList.contains("red")){
      like.click();
    }
    songTitle.textContent = `${names[index]}`
    songArtist.textContent = `${singers[index]}`
    player.src = songs[index];
    image.src = images[index];
    player.play();
  }
});

function nextSong() {
  index = index + 1;
  if (index > length - 1) {
    if(like.classList.contains("red")){
      console.log(like.classList.contains("red"));
      like.click();
      console.log(like.classList.contains("red"));
    }
    index = 0;
    songTitle.textContent = `${names[index]}`
    songArtist.textContent = `${singers[index]}`
    player.src = songs[index];
    image.src = images[index];
    player.play();
  } else {
    if(like.classList.contains("red")){
      console.log(like.classList.contains("red"));
      like.click();
      console.log(like.classList.contains("red"));
    }
    songTitle.textContent = `${names[index]}`
    songArtist.textContent = `${singers[index]}`
    player.src = songs[index];
    image.src = images[index];
    player.play();
  }
}

function backSong() {
  index = index - 1;

  if (index < 0) {
    if(like.classList.contains("red")){
      like.click();
    }
    index = length - 1;
    songTitle.textContent = `${names[index]}`
    songArtist.textContent = `${singers[index]}`
    player.src = songs[index];
    image.src = images[index];
    player.play();
  } else {
    if(like.classList.contains("red")){
      like.click();
    }
    songTitle.textContent = `${names[index]}`
    songArtist.textContent = `${singers[index]}`
    player.src = songs[index];
    image.src = images[index];
    player.play();
  }
}
goHome.addEventListener("click", function () {
  window.location.href = "https://open.spotify.com/";
});

like.addEventListener("click", function () {
  like.classList.toggle("red");
});

player.addEventListener("timeupdate", function () {
  let currentTime = player.currentTime;
  let duration = player.duration;
  let progress = (currentTime / duration) * 100;
  range.value = progress;
  range.style.background = `linear-gradient(to right, grey 0%, grey ${progress}%, white ${progress}%, white 100%)`;
});

mute.addEventListener("click", function () {
  if (player.muted) {
    player.muted = false;
    mute.classList.remove("ri-volume-up-line");
    mute.classList.add("ri-volume-mute-line");
  } else {
    player.muted = true;
    mute.classList.remove("ri-volume-mute-line");
    mute.classList.add("ri-volume-up-line");
  }
});

range.addEventListener("input", function () {
  let progressValue = range.value;
  let duration = player.duration;
  // console.log(duration, progressValue, progressValue*duration)
  let currentTiming = (progressValue * duration) / 100;
  // console.log(currentTiming);
  player.currentTime = currentTiming;
});
audioRange.addEventListener("input", function () {
  let audioValue = audioRange.value;
  console.log(audioValue);
  player.volume = audioValue;
  let progressAudio = audioValue * 100;
  console.log(progressAudio);
  audioRange.style.background = `linear-gradient(to right, grey 0%, grey ${progressAudio}%, white ${progressAudio}%, white 100%)`;
});

for(let i=1; i<= length; i++){
  let newDiv =  document.createElement("div");

  newDiv.classList.add("item");
  newDiv.innerHTML =`<span> <img src =${images[i-1]}><p>${names[i-1]}</p></span> <i class="ri-play-fill playGaana" ></i>`
  playListGaana.appendChild(newDiv);
  
}
let playGaana = document.querySelectorAll(".playGaana");
console.log(playGaana);
playGaana.forEach((i,number) => {
 
  i.addEventListener("click",function(){
console.log(number);
    playlist.style.display = "none";
    card.style.display = "block";
    songTitle.textContent = `${names[number]}`
    songArtist.textContent = `${singers[number]}`
    if (player.paused) {
      player.src = songs[number];
      image.src = images[number];
  
      player.play();
      playPause.classList.remove("ri-play-fill");
      playPause.classList.add("ri-pause-fill");
    } else {
      player.pause();
      playPause.classList.remove("ri-pause-fill");
      playPause.classList.add("ri-play-fill");
    }
  
  })
  
});