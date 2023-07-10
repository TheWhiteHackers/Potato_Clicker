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

function farmer(){
    const thescore = document.getElementById("scorecon");
    const farmerval = document.getElementById("farmervalue");
    console.log(thescore.value);
    console.log(farmerval.value);

    if (thescore.value === farmerval.value){
        counter = counter + 2
        console.log(counter);
    } else {
        alert("you dont have enough money")
    }
   

    thescore.innerHTML="$"+counter;
}