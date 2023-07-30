var seconds = 0;
var ms = 0;
var min = 0;
var appendMin = document.getElementById("min");
var appendSeconds = document.getElementById("seconds");
var appendMs = document.getElementById("ms");
var buttonStart = document.getElementById("start-button");
var buttonStop = document.getElementById("stop-button");
var buttonReset = document.getElementById("reset-button");

var interval; // to restore interval


function startTimer (){
    ms+=1
    if (ms<=9){
        appendMs.innerHTML = "0"+ms
    }
    if (ms>9){
        appendMs.innerHTML = ms
    }
    if (ms>99){
        seconds+=1
        if (seconds>9){
            appendSeconds.innerHTML = seconds
        }else{
            appendSeconds.innerHTML = "0"+seconds;
        }
        ms = 0
        appendMs.innerHTML = "0" + ms;
    }
    if (seconds>=60){
        min+=1
        if (min>9){
            appendMin.innerHTML = min;
        }else{
            appendMin.innerHTML = "0"+min
        }
        seconds = 0
        appendSeconds.innerHTML = "0"+seconds;

        ms = 0
        appendMs.innerHTML = "0"+ms
    }
}

buttonStart.onclick = function (){
    interval = setInterval(startTimer)
}
buttonReset.onclick = function(){
    clearInterval(interval)
    min = 0
    appendMin.innerHTML = "0"+min
    seconds = 0
    appendSeconds.innerHTML = "0"+seconds;
    ms = 0
    appendMs.innerHTML = "0" + ms;
}
buttonStop.onclick = function(){
    clearInterval(interval)
}