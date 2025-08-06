const music = document.querySelector("audio");
const play = document.querySelector(".play");
const playAndPauseBtn = document.querySelector(".fa-play");
const Forward = document.querySelector(".forward");
const backForward = document.querySelector(".back-forward");
const tenSecBackForwardBTN = document.querySelector(".ten-sec-back-forward");
const tenSecforwardBTN = document.querySelector(".ten-sec-forward");
const musicInformation = document.querySelector(".music_information");
const musicCover = document.querySelector(".music_cover");

let musicCounter = 0;
const musics = [
  {
    id: 1,
    src: "./public/musics/bende-naf-ta-khate-saf.mp3",
    coverSrc: "public/cover1.jpg",
    title: "بند ناف تا قاف",
    artist: "یاس",
  },
  {
    id: 2,
    src: "./public/musics/sarkoob.mp3",
    coverSrc: "public/cover2.jpg",
    title: "سرکوب",
    artist: "یاس",
  },
  {
    id: 3,
    src: "./public/musics/sefareshi.mp3",
    coverSrc: "public/cover3.jpg",
    title: "سفارشی",
    artist: "یاس",
  },
];

let isPlay = false;
const randomIndex = Math.floor(Math.random()* musics.length)

function playAndPause() {
  if (isPlay) {
    music.pause();
    playAndPauseBtn.classList.add("fa-play");
    playAndPauseBtn.classList.remove("fa-pause");
    isPlay = false;
  } else {
    music.play();
    playAndPauseBtn.classList.remove("fa-play");
    playAndPauseBtn.classList.add("fa-pause");
    isPlay = true;
  }
}
function tenSecforward() {
  music.currentTime += 10;
}
function tenSecBackforward() {
  music.currentTime -= 10;
}
function forwardNextSong() {
  musicCounter = (musicCounter + 1) % musics.length;
  music.pause();
  music.src = musics[musicCounter].src;
  musicInformation.innerHTML = `${musics[musicCounter].title} - ${musics[musicCounter].artist}`;
  musicCover.src = musics[musicCounter].coverSrc;
}
function forwardBacktSong() {
  if (musicCounter >= 1) {
    musicCounter = (musicCounter - 1) % musics.length;
    music.pause();
    music.src = musics[musicCounter].src;
    musicInformation.innerHTML = `${musics[musicCounter].title} - ${musics[musicCounter].artist}`;
    musicCover.src = musics[musicCounter].coverSrc;
  }
}

play.addEventListener("click", playAndPause);
tenSecforwardBTN.addEventListener("click", tenSecforward);
tenSecBackForwardBTN.addEventListener("click", tenSecBackforward);
Forward.addEventListener("click", forwardNextSong);
backForward.addEventListener("click", forwardBacktSong);
