const bgm = document.getElementById("bgm");
const clickSound = document.getElementById("clickSound");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.querySelector(".yes-btn");
const catReaction = document.getElementById("catReaction");

let musicStarted = false;
let yesScale = 1;

// Start music on first interaction
document.addEventListener("click", function () {
    if (!musicStarted) {
        bgm.volume = 0.5;
        bgm.play();
        musicStarted = true;
    }
});

// Soft click sound
function playClick() {
    clickSound.volume = 0.2;
    clickSound.currentTime = 0;
    clickSound.play();
}

// YES Click
function yesClick() {
    playClick();

    catReaction.innerHTML = `
        <div class="popup">
            <h3>That felt right, didn’t it? 💞</h3>
            <p>You just made a beautiful choice ✨</p>
        </div>
    `;

    // Soft floating hearts
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const heart = document.createElement("div");
            heart.className = "emoji";
            heart.innerText = "💗";
            heart.style.left = Math.random() * 100 + "vw";
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 4000);
        }, i * 300);
    }
}

// NO movement (LESS movement now)
function moveNo() {
    playClick();

    // small random shift (limited range)
    const x = Math.random() * 60 - 30;   // -30px to +30px
    const y = Math.random() * 40 - 20;   // -20px to +20px

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    // YES button grows every time NO is pressed
    yesScale += 0.15;
    yesBtn.style.transition = "transform 0.3s ease";
    yesBtn.style.transform = `scale(${yesScale})`;
}
