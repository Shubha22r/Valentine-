// Music start on first click
document.body.addEventListener("click", function(){
    document.getElementById("bgm").play();
},{ once:true });

// Faster crazy NO button
function moveNo(){
    const btn=document.getElementById("noBtn");
    btn.style.top=Math.random()*300+"px";
    btn.style.left=Math.random()*300+"px";
    btn.style.transform="scale(0.9)";
}

// YES click animation
function yesClick(){
    document.getElementById("catReaction").innerHTML="🐾 Mew Approved 💖";
    emojiRain();
}

function emojiRain(){

    const emojis = ["💖","💕","✨","🥰"];
    let count = 0;

    const interval = setInterval(() => {

        if(count >= 12){   // only 12 emojis total
            clearInterval(interval);
            return;
        }

        const emoji = document.createElement("div");
        emoji.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

        emoji.style.position = "fixed";
        emoji.style.left = Math.random()*90 + "vw";
        emoji.style.bottom = "-30px";
        emoji.style.fontSize = "22px";
        emoji.style.pointerEvents = "none";

        emoji.style.animation = "floatUp 5s ease-in-out forwards";

        document.body.appendChild(emoji);

        setTimeout(() => emoji.remove(), 5000);

        count++;

    }, 300);  // appears one by one every 0.3s
}

const style=document.createElement("style");
style.innerHTML=`
@keyframes fall{
from{transform:translateY(0);}
to{transform:translateY(110vh);}
}`;
document.head.appendChild(style);
