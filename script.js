const bgm = document.getElementById("bgm");
const noBtn = document.getElementById("noBtn");
const catReaction = document.getElementById("catReaction");

/* Floating background hearts */
function createHearts(){
    const container = document.querySelector(".floating-hearts");
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.fontSize = (Math.random()*10 + 15) + "px";
    container.appendChild(heart);

    setTimeout(()=>heart.remove(),8000);
}

setInterval(createHearts,800);

/* YES Button */
function yesClick(){

    bgm.play();

    catReaction.innerHTML = `
        <div style="
            margin-top:20px;
            background:white;
            color:#ff4d6d;
            padding:20px;
            border-radius:15px;
            font-weight:600;
        ">
            You just made the most beautiful decision of your life…  
            And I promise to make it worth it every single day 💖  
            – Shubhankar
        </div>
    `;

    emojiEffect();
}

/* Fast NO Button */
function moveNo(){
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 60);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

/* Smooth floating emojis on YES */
function emojiEffect(){

    const emojis = ["💖","💕","✨","🥰"];
    let count = 0;

    const interval = setInterval(()=>{

        if(count >= 12){
            clearInterval(interval);
            return;
        }

        const emoji = document.createElement("div");
        emoji.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

        emoji.style.position="fixed";
        emoji.style.left=Math.random()*90 + "vw";
        emoji.style.bottom="-30px";
        emoji.style.fontSize="22px";
        emoji.style.pointerEvents="none";
        emoji.style.animation="floatUp 5s ease-in-out forwards";

        document.body.appendChild(emoji);

        setTimeout(()=>emoji.remove(),5000);

        count++;

    },300);
}
