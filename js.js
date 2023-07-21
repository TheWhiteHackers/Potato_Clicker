let buylist = [
    ["farmer", 10, 1, "farmerval"],
    ["animals", 150, 0, "animalval"],
    ["farm", 100, 5, "farmval"],
    ["farm2", 350, 0, "farm2val"]
]
let powerlist = [
    ["rebirth", 1000000],
    ["cornmaze", 100],
    ["sackrace", 100]
]
let counter = -1;
let incval = 1;
window.onload=start();
function start(){
    increasescore()
    document.getElementById("nomoney").style.display='none';
    document.getElementById("shadow").style.display='none';
    document.getElementById("challcon").style.display='none';
    document.getElementById("credbox").style.display='none';
}

function increasescore(id, inc){
    const thescore = document.getElementById("finalscore");
    
    counter += incval;
    console.log(counter);

    thescore.innerHTML="$"+counter;
}

function buyitem(id){
    const thescore = document.getElementById("finalscore");
    console.log(buylist[id][1]);

    if (counter >= buylist[id][1]){
        incval += buylist[id][2];
        counter = counter-buylist[id][1];
        buylist[id][1] += 5;
        document.getElementById(buylist[id][3]).innerHTML="$"+buylist[id][1];
        console.log(counter);
    } else {
        document.getElementById("nomoney").style.display='block';
        document.getElementById("shadow").style.display='block';
    }
   
    document.getElementById("incvalscreen").innerHTML="Clicker Value: "+incval;
    thescore.innerHTML="$"+counter;
}
function closebtn(){
    document.getElementById("nomoney").style.display='none';
    document.getElementById("shadow").style.display='none';
    document.getElementById("shadow").style.display='none';
    document.getElementById("challcon").style.display='none';
    document.getElementById("credbox").style.display='none';
}
function challed(){
    document.getElementById("shadow").style.display='block';
    document.getElementById("challcon").style.display='block';
}
function opencred(){
    document.getElementById("shadow").style.display='block';
    document.getElementById("credbox").style.display='block';
}