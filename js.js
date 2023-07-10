let counter = -1;
window.onload=start();
function start(){
    increasescore()
}

function increasescore(id, inc){
    const thescore = document.getElementById("scorecon");
    
    counter++
    console.log(counter);

    thescore.innerHTML="$"+counter;

}

function challed(){
    
}