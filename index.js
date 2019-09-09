var iterance;
var seconds;
var secondScreen = false;
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

function start() {
    secondScreen = true;
    document.getElementById("firstScreen").style.display = 'none';
    document.getElementById("secondScreen").style.display = 'block';
    setTime(toMinutes(seconds));
    console.log('Time to change screen')
}

function toMinutes(second){
    var minutes = ('0' + Math.floor(second/60)).slice(-2);
    var secondnew = ('0' + second%60).slice(-2);
    // console.log(minutes + ':' + secondnew);
    return minutes + ':' + secondnew;
}

function toSeconds(minute){
    var minutes = minute.slice(0,2);
    var secondnew = minute.slice(3,5);
    minutes = parseInt(minutes);
    secondnew = parseInt(secondnew);
    // console.log(minutes + ':' + secondnew);
    return 60*minutes +secondnew;
}


function setTime(actual){
    document.getElementById("timer").innerText  = actual;
}

function getTime(){
    return document.getElementById("timer").innerText;
}

function startTimer(){
    //  while(getTime() !== '00:00'){
     var running = setInterval(() => {
        if (getTime() === '00:00') {
            console.log('Time to stop');
            clearInterval(running);
        }
        var oldSecond = getTime();
        var newSecond = (toSeconds(oldSecond)) - 1;
        setTime(toMinutes(newSecond));    
    },1000);
    
    
    // }
}