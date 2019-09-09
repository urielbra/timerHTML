var iterance;
var seconds;

var firstButtonDisabled = true;


function getIterance(){
    iterance = document.getElementById("iterance").value;
    // seconds = document.getElementById("seconds").value;
    if (iterance&&seconds){
        firstButtonDisabled = false;
        document.getElementById("startButton").style.display = 'block';
        document.getElementById("startButtonOff").style.display = 'none'; 
   
    } else {
        firstButtonDisabled = true;
        document.getElementById("startButton").style.display = 'none';
        document.getElementById("startButtonOff").style.display = 'block'; 
    
    }

}

function getSeconds(){
    // iterance = document.getElementById("iterance").value;
    seconds = document.getElementById("seconds").value;
    if (iterance&&seconds){
        firstButtonDisabled = false;
        document.getElementById("startButton").style.display = 'block';
        document.getElementById("startButtonOff").style.display = 'none'; 
    } else {
        firstButtonDisabled = true;
        document.getElementById("startButton").style.display = 'none';
        document.getElementById("startButtonOff").style.display = 'block'; 
    
    }


}

function start(){
    console.log('Time to change screen')
}