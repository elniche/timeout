
//// PARA LOS DIV'S DE TIEMPO

var OutputTime = document.querySelector(".time");


//// PARA LOS BOTONES
var theStart = document.getElementById("btn-start");
var theStop = document.getElementById("btn-stop")
var theReset = document.getElementById("btn-reset")
//var theStart = document.getElementById("btn-start")
var seconds = 0;
var minutes = 0;
var hours = 0;

//DISPLAY LEAD ZEROS
var displaySeconds = 0;
var displayMinutes = 0;
var displayHours = 0;


/// hold interval function
let interval = null;

///to hold stopwatch status
let status = "stopped";


///update the timer
function Eltimer() {
    seconds++;


    ///incrementar
    if(seconds / 60 === 1) {
      seconds = 0;
      minutes++;
    }

    if(minutes / 60 === 1) {
     minutes = 0;
     hours++;
    }


    ////input a leading 0
if(seconds < 10) {
  displaySeconds = "0" + seconds.toString()
}

else {
  displaySeconds = seconds;
}


////input a leading 0
if(minutes < 10) {
  displayMinutes = "0" + minutes.toString()
}

else {
  displayMinutes = minutes;
}


////input a leading 0
if(hours < 10) {
  displayHours = "0" + hours.toString()
}

else {
  displayHours = hours;
}

    document.getElementById("time").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}



//// start the stopwatch

function startStop() {
     if(status === "stopped") {
///start the stopwatch
interval = window.setInterval(Eltimer, 1000);
document.getElementById("btn-start").innerHTML = "stop";
status = "started";
     }

     else {
window.clearInterval(interval);
document.getElementById("btn-start").innerHTML = "start";
 status = "stopped";
     }
}

////reset the watch
function Reset() {
  
    window.clearInterval(interval);
     seconds = 0;
     minutes = 0;
     hours = 0;
    document.getElementById("time").innerHTML = "00:00:00";
    document.getElementById("btn-start").innerHTML = "start";
  }

