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
let isPlay = false;

const musics = [
  {
    id: 1,
    src: "./public/musics/bende-naf-ta-khate-saf.mp3",
    coverSrc: "public/cover1.jpg",
    title: " بند ناف تا خط صاف",
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

// تابع بارگذاری اطلاعات موزیک
function loadMusic(index) {
  music.src = musics[index].src;
  musicInformation.innerHTML = `${musics[index].title} - ${musics[index].artist}`;
  musicCover.src = musics[index].coverSrc;
}

// تابع ست کردن و پخش در صورت نیاز
function setMusic(index) {
  musicCounter = index;
  music.pause();
  loadMusic(index);
  if (isPlay) {
    music.play();
  }
}

// تابع پخش و توقف
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

// جلو بردن ۱۰ ثانیه
function tenSecforward() {
  music.currentTime += 10;
}

// عقب بردن ۱۰ ثانیه
function tenSecBackforward() {
  music.currentTime -= 10;
}

// آهنگ بعدی
function forwardNextSong() {
  const nextIndex = (musicCounter + 1) % musics.length;
  setMusic(nextIndex);
}

// آهنگ قبلی
function forwardBacktSong() {
  if (musicCounter >= 1) {
    const prevIndex = (musicCounter - 1 + musics.length) % musics.length;
    setMusic(prevIndex);
  }
}

// پخش آهنگ رندوم هنگام لود
window.addEventListener("DOMContentLoaded", () => {
  const randomIndex = Math.floor(Math.random() * musics.length);
  setMusic(randomIndex);
});

// رویداد پایان آهنگ: رفتن به آهنگ بعدی به‌صورت خودکار
music.addEventListener("ended", forwardNextSong);

// اتصال دکمه‌ها
play.addEventListener("click", playAndPause);
tenSecforwardBTN.addEventListener("click", tenSecforward);
tenSecBackForwardBTN.addEventListener("click", tenSecBackforward);
Forward.addEventListener("click", forwardNextSong);
backForward.addEventListener("click", forwardBacktSong);function forwardBacktSong() {
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
