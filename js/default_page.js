const defaultPageSections = document.querySelectorAll(
  ".default-page .section-img"
);
const aboutSection = document.querySelector(".section-about");
const contactSection = document.querySelector(".section-contact");
const projectsSection = document.querySelector(".section-projects");
const skillsSection = document.querySelector(".section-skills");
const photosSection = document.querySelector(".section-photos");
const musicSection = document.querySelector(".section-music");
const settingsSection = document.querySelector(".section-settings");
const closeDefaultSectionBtns = document.querySelectorAll(
  ".default-page .close-section-btn"
);

defaultPageSections.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("about")) {
      aboutSection.classList.toggle("hidden");
      mainHeader.classList.toggle("header-alt");
    } else if (e.target.parentElement.classList.contains("contact")) {
      contactSection.classList.toggle("hidden");
      mainHeader.classList.toggle("header-alt");
    } else if (e.target.parentElement.classList.contains("projects")) {
      projectsSection.classList.toggle("hidden");
      mainHeader.classList.toggle("header-alt");
    } else if (e.target.parentElement.classList.contains("skills")) {
      skillsSection.classList.toggle("hidden");
      mainHeader.classList.toggle("header-alt");
    } else if (e.target.parentElement.classList.contains("photos")) {
      photosSection.classList.toggle("hidden");
      mainHeader.classList.toggle("header-alt");
    } else if (e.target.parentElement.classList.contains("music")) {
      musicSection.classList.toggle("hidden");
      mainHeader.classList.toggle("header-alt");
    } else if (e.target.parentElement.classList.contains("settings")) {
      settingsSection.classList.toggle("hidden");
      mainHeader.classList.toggle("header-alt");
    }
  });
});

closeDefaultSectionBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.parentElement.classList.add("hidden");
    mainHeader.classList.remove("header-alt");
  });
});

// Expanded Section: Projects
const detailsBtns = document.querySelectorAll(".card-btns .details");

detailsBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.parentElement.previousElementSibling.firstElementChild.nextElementSibling.classList.toggle(
      "slide-right"
    );
  });
});

// Expanded Section: Skills
const skillBtns = document.querySelectorAll(".skills .skill-btn");

skillBtns.forEach((item) =>
  item.addEventListener("click", (e) => {
    e.target.parentElement.classList.toggle("active");
  })
);

// Expanded Section: Music
const songTitle = document.querySelector(".song-title");
const songArtist = document.querySelector(".song-artist");
const songImg = document.querySelector(".song-img");
const songAudio = document.querySelector(".song-audio");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");

const songs = [
  {
    title: "Beach",
    artist: "KV",
    img: "media/img/marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg",
    src: "media/music/kv-beach.mp3",
  },
  {
    title: "Early Bird",
    artist: "FSM Team feat. < e s c p >",
    img: "media/img/nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg",
    src: "media/music/fsm-team-escp-early-bird.mp3",
  },
  {
    title: "Tropical Yearnings",
    artist: "Ron Gelinas Chillout Lounge",
    img: "media/img/felipe-portella-h6gTtqBZUxc-unsplash.jpg",
    src: "media/music/ron-gelinas-chillout-lounge-tropical-yearnings.mp3",
  },
  {
    title: "Lucid Dreaming",
    artist: "FSM Team feat. < e s c p >",
    img: "media/img/krys-amon-ttv1pX6tk7o-unsplash.jpg",
    src: "media/music/fsm-team-escp-lucid-dreaming.mp3",
  },
  {
    title: "Waves",
    artist: "LIQWYD",
    img: "media/img/alexander-popov-hTv8aaPziOQ-unsplash.jpg",
    src: "media/music/liqwyd-waves.mp3",
  },
  {
    title: "Sunset Drive",
    artist: "Tokyo Music Walker",
    img: "media/img/edward-cisneros-jfU3_67YiwQ-unsplash.jpg",
    src: "media/music/tokyo-music-walker-sunset-drive.mp3",
  },
  {
    title: "Angel's Rock",
    artist: "Twisterium",
    img: "media/img/hector-bermudez-iIWDt0fXa84-unsplash.jpg",
    src: "media/music/twisterium-angels-rock.mp3",
  },
  {
    title: "Boat",
    artist: "Vlad Gluschenko",
    img: "media/img/denisse-leon-OVEWbIgffDk-unsplash.jpg",
    src: "media/music/vlad-gluschenko-boat.mp3",
  },
];

let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
  songTitle.innerText = song.title;
  songArtist.innerText = song.artist;
  songImg.src = song.img;
  songAudio.src = song.src;
}
function playSong() {
  songAudio.play();
  playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}
function pauseSong() {
  songAudio.pause();
  playBtn.innerHTML = '<i class="fas fa-play"></i>';
}
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = songAudio.duration;

  songAudio.currentTime = (clickX / width) * duration;
}

playBtn.addEventListener("click", () => {
  if (playBtn.firstElementChild.classList.contains("fa-play")) {
    playSong();
  } else if (playBtn.firstElementChild.classList.contains("fa-pause")) {
    pauseSong();
  }
});
prevBtn.addEventListener("click", () => prevSong());
nextBtn.addEventListener("click", () => nextSong());

songAudio.addEventListener("timeupdate", updateProgress);

progressContainer.addEventListener("click", setProgress);

songAudio.addEventListener("ended", nextSong);

// Expanded Section: Settings
const onBtn = document.querySelector(".on-btn");
const offBtn = document.querySelector(".off-btn");
const pageBackground = document.querySelector(".page-background");

onBtn.addEventListener("click", () => {
  pageBackground.style.animation =
    "scale-background 30s ease-in-out forwards infinite alternate";
  onBtn.style.backgroundColor = "green";
  offBtn.style.backgroundColor = "red";
});

offBtn.addEventListener("click", () => {
  pageBackground.style.animation = "none";
  offBtn.style.backgroundColor = "green";
  onBtn.style.backgroundColor = "red";
});
