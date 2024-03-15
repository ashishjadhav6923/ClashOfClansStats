console.log("euu");
const playersTarget=document.getElementById("playersSearch"); 

const playersScrollButton=document.getElementsByClassName("players");
for(let i=0;i<playersScrollButton.length;i++){
    playersScrollButton[i].addEventListener("click",()=>{
        playersTarget.scrollIntoView({behavior:"smooth"});
    })
}
const clansTarget=document.getElementById("clansSearch"); 

const clansScrollButton=document.getElementsByClassName("clans");
for(let i=0;i<playersScrollButton.length;i++){
    clansScrollButton[i].addEventListener("click",()=>{
        clansTarget.scrollIntoView({behavior:"smooth"});
    })
}