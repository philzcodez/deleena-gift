const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");
const typing = document.getElementById("typing");
const reasonBtn = document.getElementById("reasonBtn");
const reasonText = document.getElementById("reasonText");

const message = "Every line of code here exists because you make my world so much better. Happy Birthday Moy Dorogov, my Deleena 💜🩵";

let index = 0;

const reasons = [
    "Your smile is so addictive.",
    "You can shine up my life even in my darkest hour.",
    "You're the only person I can never stop thinking about.",
    "You are the ONLY notification I wanna wake up to, my favorite notification.",
    "You make even boring days feel special.",
    "You never fail to put a smile on my face.",
    "You are quite literally the kindest person I've ever met.",
    "Im so proud of you for everything you do, and I mean EVERYTHING.",
    "You gave me a reason to keep going.",
    "There is NOBODY else I want to spend forever with.",
    "I only want to watch shows together with you.",
    "I love when you do deep dives into music.",
    "I love how you roll your eyes whenever I compliment you.",
    "You are prettier than the sun.",
    "You are a living, breathing princess (miss tangled ain't got nothing on you).",
    "You always want to listen to what I wanna say even if its stupid.",
    "You actually remember about things that are important to me.",
    "You always put all of your effort into anything and it amazes me.",
    "You get more beautiful every day.",
    "You make me so happy and my life feel lighter.",
    "You make me feel so comfortable in my own skin.",
    "You are the only person I could never get bored talking to.",
    "You are the only person (besides our future potential kids) I want to read and sing to sleep.",
    "You always keep your promises, and you make me feel so safe and comfy.",
    "I love you Deleena, to the edge of the universe and beyond."
];

const passwordInput = document.getElementById("passwordInput");
const togglePassword = document.getElementById("togglePassword");
const hintText = document.getElementById("hintText");

const hints = [
    "Hint: it happened in February...💜🩵",
    "Hint: maybe its an anniversary...💜🩵",
    "Hint: try 02/22/26...💜🩵",
    "Hint: we celebrate it every month...💜🩵"
];

let hintIndex = 0;

togglePassword.addEventListener("click", () => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    togglePassword.innerHTML = type === "password" ? "👁️" : "🙈";
});

openBtn.addEventListener("click", () => {
    if (passwordInput.value.trim() === "02/22/26"){
        intro.classList.add("hidden");
        mainContent.classList.remove("hidden");
        typeWriter();
    } else {
        hintText.textContent = hints[Math.min(hintIndex, hints.length-1)];
        hintIndex++;
        passwordInput.value = "";
        passwordInput.focus();
    }
});

passwordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") openBtn.click();
});

function typeWriter() {
    if (index < message.length) {
        typing.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 45);
    }
}

let lastReasonIndex = -1;

reasonBtn.addEventListener("click", () => {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * reasons.length);
    } while (randomIndex === lastReasonIndex);
    lastReasonIndex = randomIndex;
    reasonText.innerHTML = reasons[randomIndex];
});

// Photo gallery
const photoBtn = document.getElementById("photoBtn");
const photoGallery = document.getElementById("photoGallery");
const galleryImage = document.getElementById("galleryImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const photos = [
    "photos/photo1.jpg",
    "photos/photo2.jpg",
    "photos/photo3.jpg",
    "photos/photo4.jpg",
    "photos/photo5.jpeg",
    "photos/photo6.jpg",
    "photos/photo7.jpg",
    "photos/photo8.jpeg",
    "photos/photo9.jpg",
    "photos/photo10.jpg",
    "photos/photo11.jpg",
    "photos/photo12.JPG",
    "photos/photo13.JPG",
    "photos/photo14.JPG",
    "photos/photo15.JPG",
    "photos/photo16.JPG",
    "photos/photo17.JPG",
    "photos/photo18.JPG",
    "photos/photo19.JPG",
    "photos/photo20.JPG",
    "photos/photo21.JPG",
    "photos/photo22.JPG",
    "photos/photo23.jpg",
    "photos/photo24.jpg",
    "photos/photo25.jpg",
    "photos/photo26.jpeg",
    "photos/photo27.jpeg",
    "photos/photo28.JPG",
    "photos/photo29.JPG",
    "photos/photo30.JPG",
    "photos/photo31.JPG",
    "photos/photo32.jpeg",
    "photos/photo33.jpeg",
    "photos/photo34.jpeg",
];

let currentPhoto = 0;

let lastPhotoIndex = -1;

photoBtn.addEventListener("click", () => {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * photos.length);
    } while (randomIndex === lastPhotoIndex);
    lastPhotoIndex = randomIndex;
    currentPhoto = randomIndex;
    galleryImage.src = photos[currentPhoto];

    photoGallery.classList.remove("hidden");
});


// Music player
const songs = [
    { title: "I Think We're Alone Now", artist: "Tiffany", src: "music/song1.mp3" },
    { title: "Like Real People Do", artist: "Hozier", src: "music/song2.mp3" },
    { title: "Eyes Without A Face", artist: "Billy Idol", src: "music/song3.mp3" },
    { title: "I Was Made For Lovin' You", artist: "KISS", src: "music/song4.mp3" },
    { title: "Come On Eileen", artist: "Dexys Midnight Runners", src: "music/song5.mp3" },
    { title: "Lovers Rock", artist: "TV Girl", src: "music/song6.mp3" },
    { title: "Watermelon", artist: "John + Jane Q. Public", src: "music/song7.mp3" },
    { title: "Beautiful Boy", artist: "John Lennon", src: "music/song8.mp3" },
    { title: "Say Yes To Heaven", artist: "Lana Del Rey", src: "music/song9.mp3" },
    { title: "Can't Take My Eyes off You", artist: "Frankie Valli", src: "music/song10.mp3" },
    { title: "(I Just) Died In Your Arms", artist: "Cutting Crew", src: "music/song11.mp3" },
    // Add more songs here:
    // { title: "Song Name", artist: "Artist", src: "music/filename.mp3" },
];

let currentSong = 0;
let isPlaying = false;

const song = document.getElementById("song");
const playBtn = document.getElementById("playBtn");
const prevSongBtn = document.getElementById("prevSongBtn");
const nextSongBtn = document.getElementById("nextSongBtn");
const queueBtn = document.getElementById("queueBtn");
const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");
const songList = document.getElementById("songList");

function loadSong(index) {
    const s = songs[index];
    song.src = s.src;
    songTitle.textContent = s.title;
    songArtist.textContent = s.artist;
    renderSongList();
}

function playSong() {
    song.play();
    playBtn.innerHTML = "❚❚";
    isPlaying = true;
}

function pauseSong() {
    song.pause();
    playBtn.innerHTML = "▶";
    isPlaying = false;
}

function goToSong(index) {
    currentSong = (index + songs.length) % songs.length;
    loadSong(currentSong);
    playSong();
}

function renderSongList() {
    songList.innerHTML = songs.map((s, i) => `
        <div class="song-list-item ${i === currentSong ? 'active' : ''}" onclick="goToSong(${i})">
            <span class="song-list-title">${s.title}</span>
            <span class="song-list-artist">${s.artist}</span>
        </div>
    `).join("");
}

playBtn.addEventListener("click", () => {
    isPlaying ? pauseSong() : playSong();
});

prevSongBtn.addEventListener("click", () => goToSong(currentSong - 1));
nextSongBtn.addEventListener("click", () => goToSong(currentSong + 1));

queueBtn.addEventListener("click", () => {
    songList.classList.toggle("hidden");
});

song.addEventListener("ended", () => goToSong(currentSong + 1));

loadSong(currentSong);

// Final screen
const finalBtn = document.getElementById("finalBtn");
const finalScreen = document.getElementById("finalScreen");
const backBtn = document.getElementById("backBtn");

finalBtn.addEventListener("click", () => {
    finalScreen.classList.add("hidden");
    setTimeout(() => {
        finalScreen.classList.remove("hidden");
    }, 50);
});

backBtn.addEventListener("click", () => {
    finalScreen.classList.add("hidden");
});