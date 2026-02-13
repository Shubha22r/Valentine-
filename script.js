const bgm = document.getElementById("bgm");
const clickSound = document.getElementById("clickSound");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.querySelector(".yes-btn");

let yesScale = 1;

/* ================= AUTO SECTION REVEAL ================= */

function revealSections() {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add("show");
        }, index * 600);
    });
}

window.addEventListener("load", revealSections);


/* ================= BACKGROUND MUSIC FIX ================= */
/* Browsers block autoplay until user interaction */

document.body.addEventListener("click", function startMusic() {
    bgm.volume = 0.6;
    bgm.play().catch(() => {});
    document.body.removeEventListener("click", startMusic);
});


/* ================= NO BUTTON MOVE ================= */

function moveNo() {
    clickSound.play();

    const moveX = Math.random() * 120 - 60;
    const moveY = Math.random() * 60 - 30;

    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;

    // YES grows slightly
    yesScale += 0.1;
    yesBtn.style.transform = `scale(${yesScale})`;
}


/* ================= YES CLICK ================= */

function yesClick() {
    clickSound.play();

    yesBtn.style.transform = "scale(1.6)";
    createFloatingEmojis();

    showPopup();
}


/* ================= POPUP ================= */

function showPopup() {
    const popup = document.createElement("div");
    popup.className = "popup-overlay";

    popup.innerHTML = `
        <div class="popup-box">
            <h3>She said YES 💖</h3>
            <p>Best decision ever 😌✨</p>
        </div>
    `;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 3000);
}


/* ================= FLOATING EMOJIS ================= */

function createFloatingEmojis() {
    const emojis = ["💖","💕","✨","🥰","💞","😻"];

    for (let i = 0; i < 20; i++) {
        const emoji = document.createElement("div");
        emoji.className = "floating-emoji";
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

        emoji.style.left = Math.random() * 100 + "vw";

        // Random direction
        const direction = Math.random() > 0.5 ? "floatUp" : "floatDown";
        emoji.style.animation = `${direction} ${3 + Math.random()*2}s linear`;

        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 5000);
    }
}
