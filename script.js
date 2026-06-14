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
    "Hint: we celebrate it every month... 💜🩵",
    "Hint: try 02/22/26... 💜🩵",
    "Hint: you need to include the slashes babe \"02/22/26\" 💜🩵",
    "Hint: almost there my sweet, you need some help baby? 💜🩵"
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
    { title: "I Think We're Alone Now",    artist: "Tiffany",                   src: "music/song1.mp3" },
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
    { title: "Uptown Girl",                artist: "Billy Joel",                src: "music/song12.mp3" },
    { title: "Time After Time",            artist: "Cydni Lauper",              src: "music/song13.mp3" },
    { title: "Your Love",                  artist: "The Outfield",              src: "music/song14.mp3" },
    { title: "And I Love Her",             artist: "The Beatles",               src: "music/song15.mp3" },
    { title: "Put Your Head On My Shoulder", artist: "Paul Anka",               src: "music/song16.mp3" },
    //{ title: "title", artist: "artist",              src: "music/songx.mp3" },
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

// ── Catch My Heart Game ────────────────────────────────
const gameBtn      = document.getElementById("gameBtn");
const gameScreen   = document.getElementById("gameScreen");
const gameCanvas   = document.getElementById("gameCanvas");
const gameCtx      = gameCanvas.getContext("2d");
const gameScoreEl  = document.getElementById("gameScore");
const gameTimerEl  = document.getElementById("gameTimer");
const gameResult   = document.getElementById("gameResult");
const gameResultMsg= document.getElementById("gameResultMsg");
const gameRestartBtn = document.getElementById("gameRestartBtn");
const gameCloseBtn = document.getElementById("gameCloseBtn");
const gameExitBtn  = document.getElementById("gameExitBtn");

let gameRunning = false;
let gameScore   = 0;
let gameTime    = 30;
let heartsList  = [];
let gameAnimId  = null;
let gameInterval= null;
let spawnInterval = null;
let lastTime    = 0;

const resultMessages = [
    { min: 0,  msg: "Aww, you tried! I love you anyway 💜" },
    { min: 5,  msg: "Not bad! My heart is safe with you 🩵" },
    { min: 12, msg: "You caught so many! Just like you caught me 💜🩵" },
    { min: 20, msg: "Heart-catching champion! You already had mine 💜" },
    { min: 28, msg: "Perfect! You catch everything I throw at you 🩵💜✨" },
];

function getResultMsg(score) {
    let msg = resultMessages[0].msg;
    for (const r of resultMessages) {
        if (score >= r.min) msg = r.msg;
    }
    return msg;
}

function resizeGameCanvas() {
    gameCanvas.width  = gameScreen.clientWidth;
    gameCanvas.height = gameScreen.clientHeight;
}

class FallingHeart {
    constructor(canvasW, canvasH, speed) {
        this.x     = Math.random() * (canvasW - 60) + 30;
        this.y     = -40;
        this.size  = Math.random() * 18 + 22; // 22–40px
        this.speed = speed * (0.75 + Math.random() * 0.5);
        this.wobble= Math.random() * Math.PI * 2;
        this.wobbleSpeed = 0.04 + Math.random() * 0.03;
        this.color = Math.random() > 0.5 ? "#c026d3" : "#38bdf8";
        this.alpha = 0;
        this.caught= false;
        this.pop   = 0; // pop animation when caught
        this.canvasH = canvasH;
        this.canvasW = canvasW;
    }

    update() {
        if (this.caught) {
            this.pop += 0.18;
            this.alpha = Math.max(0, 1 - this.pop);
            return;
        }
        this.alpha = Math.min(1, this.alpha + 0.06);
        this.wobble += this.wobbleSpeed;
        this.x += Math.sin(this.wobble) * 0.7;
        this.y += this.speed;
    }

    isOffScreen() {
        return this.y > this.canvasH + 50;
    }

    isCaught(tx, ty) {
        const dx = tx - this.x;
        const dy = ty - this.y;
        return Math.sqrt(dx * dx + dy * dy) < this.size + 12;
    }

    draw(ctx) {
        if (this.alpha <= 0) return;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        const s = this.caught ? this.size * (1 + this.pop * 1.5) : this.size;
        ctx.translate(this.x, this.y);
        drawHeart(ctx, s, this.color, this.caught);
        ctx.restore();
    }
}

function drawHeart(ctx, size, color, glowing) {
    ctx.font = `${size * 2}px serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    if (glowing) {
        ctx.shadowColor = color;
        ctx.shadowBlur  = 20;
    }

    // Alternate between your two heart emojis
    ctx.fillText(color === "#c026d3" ? "💜" : "🩵", 0, 0);
    ctx.shadowBlur = 0;
}

function spawnHeart() {
    if (!gameRunning) return;
    const elapsed = 30 - gameTime;
    // Ramp: starts at 1.4, caps at 3.2 around t=20s
    const speed = Math.min(1.4 + elapsed * 0.09, 3.2);
    heartsList.push(new FallingHeart(gameCanvas.width, gameCanvas.height, speed));
}

function gameLoop(ts) {
    if (!gameRunning) return;
    const dt = ts - lastTime;
    lastTime = ts;

    gameCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);

    // Draw faint falling particle trail (reuse starfield feel)
    heartsList = heartsList.filter(h => {
        h.update();
        h.draw(gameCtx);
        // remove if off screen or fully faded after catch
        if (h.caught && h.alpha <= 0) return false;
        if (!h.caught && h.isOffScreen()) return false;
        return true;
    });

    gameAnimId = requestAnimationFrame(gameLoop);
}

function startGame() {
    gameScore  = 0;
    gameTime   = 30;
    heartsList = [];
    gameRunning= true;
    gameScoreEl.textContent = "0";
    gameTimerEl.textContent = "30";
    gameResult.classList.add("hidden");
    resizeGameCanvas();

    // Countdown timer
    gameInterval = setInterval(() => {
        gameTime--;
        gameTimerEl.textContent = gameTime;
        if (gameTime <= 0) endGame();
    }, 1000);

    // Spawn hearts — start 1 every 900ms, ramp to every 550ms
    let spawnDelay = 900;
    function scheduleSpawn() {
        if (!gameRunning) return;
        spawnHeart();
        const elapsed = 30 - gameTime;
        spawnDelay = Math.max(550, 900 - elapsed * 18);
        spawnInterval = setTimeout(scheduleSpawn, spawnDelay);
    }
    scheduleSpawn();

    lastTime = performance.now();
    gameAnimId = requestAnimationFrame(gameLoop);
}

function endGame() {
    gameRunning = false;
    clearInterval(gameInterval);
    clearTimeout(spawnInterval);
    cancelAnimationFrame(gameAnimId);
    gameResultMsg.textContent = getResultMsg(gameScore);
    gameResult.classList.remove("hidden");
}

function handleTap(x, y) {
    if (!gameRunning) return;
    let caught = false;
    for (const h of heartsList) {
        if (!h.caught && h.isCaught(x, y)) {
            h.caught = true;
            gameScore++;
            gameScoreEl.textContent = gameScore;
            caught = true;
            break; // one tap = one heart
        }
    }
}

// Touch events (mobile first)
gameCanvas.addEventListener("touchstart", e => {
    e.preventDefault();
    const rect = gameCanvas.getBoundingClientRect();
    for (const t of e.changedTouches) {
        handleTap(t.clientX - rect.left, t.clientY - rect.top);
    }
}, { passive: false });

// Mouse fallback for desktop
gameCanvas.addEventListener("mousedown", e => {
    const rect = gameCanvas.getBoundingClientRect();
    handleTap(e.clientX - rect.left, e.clientY - rect.top);
});

gameBtn.addEventListener("click", () => {
    gameScreen.classList.remove("hidden");
    startGame();
});

gameExitBtn.addEventListener("click", () => {
    endGame();
    gameScreen.classList.add("hidden");
});

gameRestartBtn.addEventListener("click", startGame);

gameCloseBtn.addEventListener("click", () => {
    gameScreen.classList.add("hidden");
});

window.addEventListener("resize", () => {
    if (!gameScreen.classList.contains("hidden")) resizeGameCanvas();
});