let timerTime = [00,00,00];
var myInterval = null;
var StartTime;

function add() {
  var currentTime = new Date().getTime(); 

  var diff = currentTime - StartTime;

  timerTime[2] = diff % 1000;

  timerTime[1] = Math.floor(diff / 1000 % 60);

  timerTime[0] = Math.floor(diff / 1000 / 60);

  document.getElementById('timer').innerHTML = `${timerTime[0]}:${timerTime[1]}:${timerTime[2]}`
}




document.onkeydown = function (event) {
    switch (event.keyCode) {
        case 32: 
        space()
        break;
    }
}
const Rki = ['R2', "R'", 'R'];
const Lki = ['L2', "L'", 'L'];
const Dki = ['D2', "D'", 'D'];
const Uki = ['U2', "U'", 'U'];
const Fki = ['F2', "F'", 'F'];
const Bki = ['B2', "B'", 'B'];
const scrambleLetters = [Rki, Dki, Lki, Uki, Fki, Bki];
var scramble = '';

function generateScramble(){
  scramble='';
  for (var i  = 0; i <= 15; i++) {
  var previous;
  var random = Math.floor(Math.random() * scrambleLetters.length);
  if (random == previous) {
    if (random == 5) {
      random -= 1;
    }else {
      random += 1;
    }
  }

  
  scramble += scrambleLetters[random][Math.floor(Math.random() * 3)] + ' ';
  previous = random;
  }
setTimeout( () => {

document.getElementById('scramble').innerHTML = scramble;
},10);
}

function space() {
  
  if (myInterval == null) {
    StartTime = new Date().getTime();
    timerTime = [0,0,0];
    document.getElementById('timer').innerHTML = `${timerTime[0]}:${timerTime[1]}:${timerTime[2]}`
    myInterval = setInterval(add, 10);
  }else {
    clearInterval(myInterval);
    myInterval = null;
    generateScramble();
  }

}      
  