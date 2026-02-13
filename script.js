const bgm = document.getElementById("bgm");
const clickSound = document.getElementById("clickSound");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.querySelector(".yes-btn");

let musicStarted = false;
let yesScale = 1;
let noCount = 0;

// Start music on first interaction
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

// YES CLICK → POPUP
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

    // Floating Emojis BOTH directions
    for (let i = 0; i < 16; i++) {

        const emoji = document.createElement("div");
        emoji.className = "floating-emoji";
        emoji.innerText = "💖";

        emoji.style.left = Math.random() * 100 + "vw";

        if (i % 2 === 0) {
            // Bottom → Top
            emoji.style.bottom = "-30px";
            emoji.style.animation = "floatUp 6s linear forwards";
        } else {
            // Top → Bottom
            emoji.style.top = "-30px";
            emoji.style.animation = "floatDown 6s linear forwards";
        }

        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 6000);
    }
}

    // Floating hearts
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement("div");
            heart.className = "emoji";
            heart.innerText = "💖";
            heart.style.left = Math.random() * 100 + "vw";
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 4000);
        }, i * 200);
    }
}

// NO CLICK
function moveNo() {
    playClick();
    noCount++;

    // Slightly more movement but still controlled
    const x = Math.random() * 120 - 60;   // -60px to +60px
    const y = Math.random() * 80 - 40;    // -40px to +40px

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    // YES grows smoothly
    yesScale += 0.12;
    yesBtn.style.transition = "transform 0.3s ease";
    yesBtn.style.transform = `scale(${yesScale})`;
}


// Reveal on scroll
const sections = document.querySelectorAll(".section");

function revealSections() {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const boxTop = section.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            section.classList.add("show");
        }
    });
}

// On scroll
window.addEventListener("scroll", revealSections);

// Auto reveal (for small pages without scroll)
window.addEventListener("load", () => {
    setTimeout(() => {
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.classList.add("show");
            }, index * 400);
        });
    }, 300);
});
