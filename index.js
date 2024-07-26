
        const PlayButton= document.getElementsByClassName("play")[0];
const lapButton = document.getElementsByClassName(" lap")[0];
const restButton= document.getElementsByClassName("reset")[0];
const clearButton= document.getElementsByClassName("laps-clear-button")[0];
const minute =document.getElementsByClassName("min")[0];
const second= document.getElementsByClassName("sec")[0];
const centiSecond=document.getElementsByClassName("msec")[0];
const laps=document.getElementsByClassName("laps")[0];


let isplay=false;
let secCounter =0;
let min;
let sec;
let centiSec;
let centiCounter=0;
let minCounter=0;
let lapitems=0;
let isReset= false;



const toggleButton=()=>{
    lapButton.classList.remove("hidden");
    restButton.classList.remove("hidden");
}



const Play = ()=>{
    if (!isplay && !isReset){
        PlayButton.innerHTML='Pause';
       
        min =setInterval(()=>{
        minute.innerHTML=` &nbsp; ${++minCounter}:`;
    },60*1000);

    sec =setInterval(()=>{
            if(secCounter===60){
                secCounter=0;
            }
        second.innerHTML=`&nbsp; ${++secCounter}:`;
    },1000);


    centiSec =setInterval(()=>{
        if(centiCounter===100){
            centiCounter=0;
        }
         centiSecond.innerHTML=`  &nbsp;${++centiCounter}: `;
    },10);

        isplay=true;
        isReset=true;
    }else{
        PlayButton.innerHTML='Play';
        clearInterval(min);
        clearInterval(sec);
        clearInterval(centiSec);
        isplay=false;
        isReset=false;
    }
    toggleButton();

}



const reset = ()=>{
    isReset=true;
    Play();
    lapButton.classList.add("hidden");
    lapButton.classList.add("hidden");
    restButton.classList.add("hidden");
    second.innerHTML=' &nbsp; 0:';
    centiSecond.innerHTML=' &nbsp; 0';
    minute.innerHTML='0:';

}

const lap=()=>{
    const li =document.createElement("li");
    const number = document.createElement("span");
    const timestamp=document.createElement("span");

    li.setAttribute("class","lap-items");
    number.setAttribute("class", "number");
    timestamp.setAttribute("class", "time-stamp");

    number.innerText=`#${ ++lapitems}  `;

    timestamp.innerHTML= ` ${ minCounter}: ${secCounter}: ${ centiCounter}`;

    li.append(number,timestamp);
    laps.append(li);

     clearButton.classList.remove("hidden");

}

const clearAll=()=>{
    laps.innerHTML=``;
    laps.append(clearButton);
    clearButton.classList.add("hidden");
}

PlayButton.addEventListener("click",Play);
restButton.addEventListener("click", reset);
lapButton.addEventListener("click",lap);
clearButton.addEventListener("click",clearAll);






    