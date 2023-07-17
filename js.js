let buylist = [
    ["farmer", 10, 1],
    ["animals", 150, 0],
    ["farm", 270, 5],
    ["farm2", 350, 0]
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
        buylist[id][1] += 10;
        document.getElementById("farmervalue").innerHTML="$"+buylist[id][1];
        console.log(counter);
    } else {
        document.getElementById("nomoney").style.display='none';
    }
   
    document.getElementById("incvalscreen").innerHTML="Clicker Value: "+incval;
    thescore.innerHTML="$"+counter;
}