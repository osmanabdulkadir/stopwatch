



var seconds = 00;
var tens = 00;
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
var appendSeconds = document.getElementById('seconds');
var appendTens = document.getElementById('tens');
var Interval;

//event listerers

function startTimer() {
    tens++

    if(tens < 9){
        appendTens.innerHTML = "0" + tens;

    }

    if(tens > 9 ){
        appendTens.innerHTML = tens
    };

    if(tens > 99){
        seconds++;
        appendSeconds.innerHTML ='0' + 0;
        tens = 0;
        appendTens.innerHTML = seconds;
    };

    if(seconds > 9 ){
        appendSeconds.innerHTML = seconds;
    }
}

start.onClick = function(){
    Interval = setInterval(startTimer)
};

stop.onClick = function(){
    clearInterval(Interval);
};

reset.onClick = function(){
    clearInterval(Interval);
    tens = "00"
    seconds = "00";
    appendSeconds.innerHTML= seconds
    appendTens.innerHTML
};
