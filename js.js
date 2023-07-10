let buylist = [
    ["farmer", 10, 1],
    ["animals", 150],
    ["farm", 20, 5],
    ["farm2", 350]
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
}

function increasescore(id, inc){
    const thescore = document.getElementById("scorecon");
    
    counter += incval;
    console.log(counter);

    thescore.innerHTML="$"+counter;

}

function buyitem(id){
    const thescore = document.getElementById("scorecon");
    console.log(buylist[id][1]);

    if (counter >= buylist[id][1]){
        incval += 
        counter = counter-buylist[id][1] 
        console.log(counter);
    } else {
        alert("you dont have enough money")
    }
   

    thescore.innerHTML="$"+counter;
}