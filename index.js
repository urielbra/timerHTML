var iterance;
var seconds;
var timerRunning = false;
var secondScreen = false;
var swalOn = false;
var audioPlaying;
var running;
var firstButtonDisabled = true;

document.addEventListener ('keypress', (event) => {
  if(secondScreen){
    if(event.charCode === 32){
      
      if(timerRunning){
        resetTimer();
      } else if(audioPlaying) {
        closeSwal();
      } else{
        startTimer();
      }
    }
  }
});



var alarm = new Audio('assets/alarm1.mp3');
var beep = new Audio('assets/beep.mp3');
var duration = Math.ceil(alarm) * 1000;



function getIterance(){
    iterance = get("iterance").value;
    // seconds = get("seconds").value;
    if (iterance&&seconds){
        firstButtonDisabled = false;
        get("startButton").style.display = 'flex';
        get("startButtonOff").style.display = 'none'; 
   
    } else {
        firstButtonDisabled = true;
        get("startButton").style.display = 'none';
        get("startButtonOff").style.display = 'block'; 
    
    }

}

function getSeconds(){
    // iterance = get("iterance").value;
    seconds = get("seconds").value;
    if (iterance&&seconds){
        firstButtonDisabled = false;
        get("startButton").style.display = 'flex';
        get("startButtonOff").style.display = 'none'; 
    } else {
        firstButtonDisabled = true;
        get("startButton").style.display = 'none';
        get("startButtonOff").style.display = 'block'; 
    
    }


}

function start() {
    secondScreen = true;
    get("firstScreen").style.display = 'none';
    get("secondScreen").style.display = 'block';
    setTime(toMinutes(seconds));
    setIterance(iterance);
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
    get("timer").innerText  = actual;
}

function setIterance(actual){
    get("iteranceLeft").innerText  = actual;
}

function getTime(){
    return get("timer").innerText;
}

function resetTimer(){
  
       get('resetTimerButton').style.display ='none';
       get('startTimerButton').style.display = 'flex';
       clearInterval(running);
       console.log('Time to reset');
    //    spawnSWAL();
       setIterance(iterance);
       setTime(toMinutes(seconds));
       timerRunning = false;
   
}

function startTimer(){

    if(!timerRunning){
        timerRunning = true;
        get('resetTimerButton').style.display ='flex';
        get('startTimerButton').style.display = 'none';
        playBeep();
        running = setInterval(() => {
           var oldSecond = getTime();
           var newSecond = (toSeconds(oldSecond)) - 1;
           if (getTime() === '00:00') {
                get('resetTimerButton').style.display ='none';
                get('startTimerButton').style.display = 'flex';
               clearInterval(running);
               console.log('Time to stop');
               iterance--;
               spawnSWAL();
               setIterance(iterance);
               setTime(toMinutes(seconds));
               timerRunning = false;
           } else {    
           setTime(toMinutes(newSecond));
           }
       },1000);
    }

}

function get(element){
    return document.getElementById(element);
}

function spawnSWAL(){
    swalOn = true;
    get('secondScreen').style.display = 'none';
    get('swal').style.display = 'flex';
    audioPlaying = setInterval(() => {
        playAudio()
    }, duration);

}

function closeSwal(){
    clearInterval(audioPlaying);
    pauseAudio();
    get('secondScreen').style.display = 'block';
    (get('swal').style.display='none')
    swalOn = false;
    if(iterance===0){
        location.reload();
        timerRunning = false;
        secondScreen = false;
        firstButtonDisabled = true;
        get("firstScreen").style.display = 'block';
        get("secondScreen").style.display = 'none';
        get("seconds").value = '';
        get("iterance").value = '';
    } 
}




function playAudio() {
  alarm.play();
}

function playBeep() {
    beep.play();
}

function pauseAudio() {
  alarm.pause();
}