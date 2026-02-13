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

// Emoji celebration
function emojiRain(){
    for(let i=0;i<70;i++){
        const emoji=document.createElement("div");
        emoji.innerHTML=["💖","✨","🥰","🎉"][Math.floor(Math.random()*2)];
        emoji.style.position="fixed";
        emoji.style.left=Math.random()*100+"vw";
        emoji.style.top="-20px";
        emoji.style.fontSize="25px";
        emoji.style.animation="fall 3s linear forwards";
        document.body.appendChild(emoji);
        setTimeout(()=>emoji.remove(),3000);
    }
}

const style=document.createElement("style");
style.innerHTML=`
@keyframes fall{
from{transform:translateY(0);}
to{transform:translateY(110vh);}
}`;
document.head.appendChild(style);
