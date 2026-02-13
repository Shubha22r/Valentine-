const bgm = document.getElementById("bgm");
const clickSound = document.getElementById("clickSound");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.querySelector(".yes-btn");

let musicStarted = false;
let yesScale = 1;
let noCount = 0;

/* ================= MUSIC ================= */

document.addEventListener("click", function () {
    if (!musicStarted) {
        bgm.volume = 0.5;
        bgm.play();
        musicStarted = true;
    }
});

function playClick() {
    clickSound.volume = 0.2;
    clickSound.currentTime = 0;
    clickSound.play();
}

/* ================= SECTION REVEAL ================= */

const sections = document.querySelectorAll(".section");

function revealOnScroll() {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", () => {
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add("show");
        }, index * 500);
    });
});

/* ================= YES CLICK ================= */

function yesClick() {
    playClick();

    // Popup
    const overlay = document.createElement("div");
    overlay.className = "popup-overlay";

    overlay.innerHTML = `
        <div class="popup-box">
            <h3>You chose love 💞</h3>
            <p>Some decisions feel magical… this was one of them ✨</p>
        </div>
    `;

    document.body.appendChild(overlay);
    overlay.addEventListener("click", () => overlay.remove());

    // Floating emojis BOTH directions
    for (let i = 0; i < 16; i++) {
        const emoji = document.createElement("div");
        emoji.className = "floating-emoji";
        emoji.innerText = "💖";
        emoji.style.left = Math.random() * 100 + "vw";

        if (i % 2 === 0) {
            emoji.style.bottom = "-30px";
            emoji.style.animation = "floatUp 6s linear forwards";
        } else {
            emoji.style.top = "-30px";
            emoji.style.animation = "floatDown 6s linear forwards";
        }

        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 6000);
    }
}

/* ================= NO CLICK ================= */

function moveNo() {
    playClick();
    noCount++;

    const x = Math.random() * 120 - 60;
    const y = Math.random() * 80 - 40;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    yesScale += 0.12;
    yesBtn.style.transition = "transform 0.3s ease";
    yesBtn.style.transform = `scale(${yesScale})`;
}
