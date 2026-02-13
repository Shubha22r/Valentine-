const bgm = document.getElementById("bgm");
const clickSound = document.getElementById("clickSound");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.querySelector(".yes-btn");
const catReaction = document.getElementById("catReaction");

let musicStarted = false;
let yesScale = 1;
let noCount = 0;

// Start music on first click
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

// YES CLICK
function yesClick() {
    playClick();

    catReaction.innerHTML = `
        <div class="popup">
            <h3>You chose love 💞</h3>
            <p>That was the most beautiful decision ever ✨</p>
        </div>
    `;

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

    // Slight movement (controlled)
    const x = Math.random() * 60 - 30;
    const y = Math.random() * 40 - 20;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    // YES grows
    yesScale += 0.15;
    yesBtn.style.transition = "all 0.3s ease";
    yesBtn.style.transform = `scale(${yesScale})`;

    // Glow increases
    yesBtn.style.boxShadow = `0 0 ${20 + noCount * 10}px rgba(255,75,110,0.8)`;

    // Cat reactions
    if (noCount === 1) {
        catReaction.innerHTML = "<p>😾 The cats are judging you...</p>";
    } 
    else if (noCount === 2) {
        catReaction.innerHTML = "<p>🙀 Are you sure about that?</p>";
    } 
    else if (noCount >= 3) {
        catReaction.innerHTML = "<p>😼 Resistance is futile. Just press YES.</p>";
        yesBtn.style.transform = "scale(1.8)";
        yesBtn.style.animation = "pulse 1s infinite";
    }
}
