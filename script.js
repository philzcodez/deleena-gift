// for the best girlfriend ever, I love you Deleena H Ramchan

// ── Starfield ──────────────────────────────────────────
const canvas = document.getElementById('stars-canvas');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
}

function initStars() {
    stars = Array.from({ length: 140 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.2,
        o: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 0.3 + 0.05,
        dir: Math.random() > 0.5 ? 1 : -1,
        phase: Math.random() * Math.PI * 2
    }));
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
        s.phase += s.speed * 0.016;
        const opacity = s.o * (0.6 + 0.4 * Math.sin(s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${opacity})`;
        ctx.fill();
    });
    requestAnimationFrame(drawStars);
}

resizeCanvas();
initStars();
requestAnimationFrame(drawStars);
window.addEventListener('resize', () => { resizeCanvas(); initStars(); });

// ── App logic ──────────────────────────────────────────
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
    "I'm so proud of you for everything you do, and I mean EVERYTHING.",
    "You gave me a reason to keep going.",
    "There is NOBODY else I want to spend forever with.",
    "I only want to watch shows together with you.",
    "I love when you do deep dives into music.",
    "I love how you roll your eyes whenever I compliment you.",
    "You are prettier than the sun.",
    "You are a living, breathing princess (miss tangled ain't got nothing on you).",
    "You always want to listen to what I wanna say even if it's stupid.",
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

// Password
const passwordInput  = document.getElementById("passwordInput");
const togglePassword = document.getElementById("togglePassword");
const hintText       = document.getElementById("hintText");

const hints = [
    "Hint: it happened in February... 💜🩵",
    "Hint: maybe it's an anniversary... 💜🩵",
    "Hint: try 02/22/26... 💜🩵",
    "Hint: we celebrate it every month... 💜🩵"
];
let hintIndex = 0;

togglePassword.addEventListener("click", () => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    togglePassword.innerHTML = type === "password" ? "👁️" : "🙈";
});

openBtn.addEventListener("click", () => {
    if (passwordInput.value.trim() === "02/22/26") {
        intro.classList.add("hidden");
        mainContent.classList.remove("hidden");
        typeWriter();
    } else {
        hintText.textContent = hints[Math.min(hintIndex, hints.length - 1)];
        hintIndex++;
        passwordInput.value = "";
        passwordInput.focus();
    }
});

passwordInput.addEventListener("keydown", e => {
    if (e.key === "Enter") openBtn.click();
});

function typeWriter() {
    if (index < message.length) {
        typing.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 45);
    }
}

// Reasons
let lastReasonIndex = -1;
reasonBtn.addEventListener("click", () => {
    let r;
    do { r = Math.floor(Math.random() * reasons.length); }
    while (r === lastReasonIndex);
    lastReasonIndex = r;
    reasonText.innerHTML = reasons[r];
});

// Photo gallery
const photoBtn     = document.getElementById("photoBtn");
const photoGallery = document.getElementById("photoGallery");
const galleryImage = document.getElementById("galleryImage");

const photos = [
    "photos/photo1.jpg","photos/photo2.jpg","photos/photo3.jpg","photos/photo4.jpg",
    "photos/photo5.jpeg","photos/photo6.jpg","photos/photo7.jpg","photos/photo8.jpeg",
    "photos/photo9.jpg","photos/photo10.jpg","photos/photo11.jpg","photos/photo12.JPG",
    "photos/photo13.JPG","photos/photo14.JPG","photos/photo15.JPG","photos/photo16.JPG",
    "photos/photo17.JPG","photos/photo18.JPG","photos/photo19.JPG","photos/photo20.JPG",
    "photos/photo21.JPG","photos/photo22.JPG","photos/photo23.jpg","photos/photo24.jpg",
    "photos/photo25.jpg","photos/photo26.jpeg","photos/photo27.jpeg","photos/photo28.JPG",
    "photos/photo29.JPG","photos/photo30.JPG","photos/photo31.JPG","photos/photo32.jpeg",
    "photos/photo33.jpeg","photos/photo34.jpeg", "photos/photo35.jpeg", "photos/photo36.jpeg", 
    "photos/photo37.jpeg", "photos/photo38.JPG", "photos/photo39.JPG", "photos/photo40.jpeg", 
];

let lastPhotoIndex = -1;
photoBtn.addEventListener("click", () => {
    let r;
    do { r = Math.floor(Math.random() * photos.length); }
    while (r === lastPhotoIndex);
    lastPhotoIndex = r;
    galleryImage.src = photos[r];
    photoGallery.classList.remove("hidden");
});

// ── Music player ───────────────────────────────────────
const songs = [
    { title: "I Think We're Alone Now",   artist: "Tiffany",                   src: "music/song1.mp3" },
    { title: "Like Real People Do",        artist: "Hozier",                    src: "music/song2.mp3" },
    { title: "Eyes Without A Face",        artist: "Billy Idol",                src: "music/song3.mp3" },
    { title: "I Was Made For Lovin' You",  artist: "KISS",                      src: "music/song4.mp3" },
    { title: "Come On Eileen",             artist: "Dexys Midnight Runners",    src: "music/song5.mp3" },
    { title: "Lovers Rock",                artist: "TV Girl",                   src: "music/song6.mp3" },
    { title: "Watermelon",                 artist: "John + Jane Q. Public",     src: "music/song7.mp3" },
    { title: "Beautiful Boy",              artist: "John Lennon",               src: "music/song8.mp3" },
    { title: "Say Yes To Heaven",          artist: "Lana Del Rey",              src: "music/song9.mp3" },
    { title: "Can't Take My Eyes off You", artist: "Frankie Valli",             src: "music/song10.mp3" },
    { title: "(I Just) Died In Your Arms", artist: "Cutting Crew",              src: "music/song11.mp3" },
];

let currentSong = 0;
let isPlaying = false;

const song        = document.getElementById("song");
const playBtn     = document.getElementById("playBtn");
const prevSongBtn = document.getElementById("prevSongBtn");
const nextSongBtn = document.getElementById("nextSongBtn");
const queueBtn    = document.getElementById("queueBtn");
const songTitle   = document.getElementById("songTitle");
const songArtist  = document.getElementById("songArtist");
const songList    = document.getElementById("songList");

// Progress bar
const progressBar  = document.getElementById("progressBar");
const progressFill = document.getElementById("progressFill");
const currentTime  = document.getElementById("currentTime");
const totalTime    = document.getElementById("totalTime");

function fmt(s) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
}

song.addEventListener("timeupdate", () => {
    if (!song.duration) return;
    const pct = (song.currentTime / song.duration) * 100;
    progressFill.style.width = pct + '%';
    currentTime.textContent  = fmt(song.currentTime);
    totalTime.textContent    = fmt(song.duration);
});

progressBar.addEventListener("click", e => {
    if (!song.duration) return;
    const rect = progressBar.getBoundingClientRect();
    song.currentTime = ((e.clientX - rect.left) / rect.width) * song.duration;
});

function loadSong(i) {
    const s = songs[i];
    song.src = s.src;
    songTitle.textContent  = s.title;
    songArtist.textContent = s.artist;
    progressFill.style.width = '0%';
    currentTime.textContent  = '0:00';
    totalTime.textContent    = '0:00';
    renderSongList();
}

function playSong()  { song.play();  playBtn.innerHTML = "❚❚"; isPlaying = true; }
function pauseSong() { song.pause(); playBtn.innerHTML = "▶";  isPlaying = false; }

function goToSong(i) {
    currentSong = ((i % songs.length) + songs.length) % songs.length;
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

playBtn.addEventListener("click",     () => isPlaying ? pauseSong() : playSong());
prevSongBtn.addEventListener("click", () => goToSong(currentSong - 1));
nextSongBtn.addEventListener("click", () => goToSong(currentSong + 1));
queueBtn.addEventListener("click",    () => songList.classList.toggle("hidden"));
song.addEventListener("ended",        () => goToSong(currentSong + 1));

loadSong(currentSong);

// ── Final screen ───────────────────────────────────────
const finalBtn    = document.getElementById("finalBtn");
const finalScreen = document.getElementById("finalScreen");
const backBtn     = document.getElementById("backBtn");

finalBtn.addEventListener("click", () => {
    finalScreen.classList.add("hidden");
    setTimeout(() => finalScreen.classList.remove("hidden"), 50);
});

backBtn.addEventListener("click", () => finalScreen.classList.add("hidden"));