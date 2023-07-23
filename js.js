let buylist = [
    ["farmer", 10, 1, "farmerval"],
    ["animals", 15, 0.5, "animalval"],
    ["farm", 100, 5, "farmval"],
    ["farm2", 350, 1, "farm2val"]
]
let powerlist = [
    ["rebirth", 1000000],
    ["cornmaze", 100],
    ["sackrace", 100]
]
let counter = -1;
let incval = 1;
let autotimer;
let autoincval = 0;
window.onload=start();

function start(){
    increasescore()
    document.getElementById("nomoney").style.display='none';
    document.getElementById("shadow").style.display='none';
    document.getElementById("challcon").style.display='none';
    document.getElementById("credbox").style.display='none';
    document.getElementById("soyousteal").style.display='none';
}

function increasescore(id, inc){
    const thescore = document.getElementById("finalscore");
    counter += incval;
    thescore.innerHTML="$"+counter;
}

function buyitem(id){
    const thescore = document.getElementById("finalscore");
    if (counter >= buylist[id][1]){
        incval += buylist[id][2];
        counter = counter-buylist[id][1];
        buylist[id][1] += 5;
        document.getElementById(buylist[id][3]).innerHTML="$"+buylist[id][1];
        document.getElementById("incvalscreen").innerHTML="Clicker Value: "+incval;
        thescore.innerHTML="$"+counter;
    } else {
        document.getElementById("nomoney").style.display='block';
    }
}

function autoclick(id){
    const thescore = document.getElementById("finalscore");
    if(counter >= buylist[id][1]){        
        autoincval += buylist[id][2];
        counter = counter - buylist[id][1];
        buylist[id][1] += 5;
        document.getElementById(buylist[id][3]).innerHTML="$"+buylist[id][1];
        document.getElementById("scoreauto").innerHTML="Auto: "+autoincval+" per sec";
        thescore.innerHTML="$"+counter;
        increaseauto();
    } else {
        document.getElementById("nomoney").style.display='block';
    }
}

function increaseauto(){
    const thescore = document.getElementById("finalscore");
    counter += autoincval;   
    thescore.innerHTML="$"+counter;
    clearTimeout(autotimer);
    autotimer = setTimeout(() => {
        increaseauto();
      }, "1000");  
}

function closebtn(){
    document.getElementById("nomoney").style.display='none';
    document.getElementById("shadow").style.display='none';
    document.getElementById("challcon").style.display='none';
    document.getElementById("credbox").style.display='none';
    document.getElementById("soyousteal").style.display='none';
}

function challed(){
    document.getElementById("shadow").style.display='block';
    document.getElementById("challcon").style.display='block';
}

function opencred(){
    document.getElementById("shadow").style.display='block';
    document.getElementById("credbox").style.display='block';
}

function opensteal(){
    document.getElementById("nomoney").style.display='none';
    document.getElementById("shadow").style.display='block';
    document.getElementById("soyousteal").style.display='block';
}

function moneytree(){

}