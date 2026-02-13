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
    const emojis = ["💖","💕","💘","✨","🥰"];
    
    for(let i=0;i<20;i++){   // fewer emojis (20 only)

        const emoji = document.createElement("div");
        emoji.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];
        
        emoji.style.position = "fixed";
        emoji.style.left = Math.random()*100 + "vw";
        emoji.style.bottom = "-20px";
        emoji.style.fontSize = "22px";
        emoji.style.opacity = "0";
        emoji.style.pointerEvents = "none";
        
        emoji.style.animation = "floatUp 4s ease-in-out forwards";

        document.body.appendChild(emoji);

        setTimeout(()=> emoji.remove(), 4000);
    }
}

const style=document.createElement("style");
style.innerHTML=`
@keyframes fall{
from{transform:translateY(0);}
to{transform:translateY(110vh);}
}`;
document.head.appendChild(style);
