$(document).ready(function() {
  console.log('linked!');

var promptBox = document.getElementById('prompt');
var log = document.getElementById('log');
var puse

var pullOutPurse = function(){
  var purseTotalLi = document.createElement('li');
  purseTotalLi.textContent = 'ShylockBot pulls out his purse containing ' + 
  ' ducats.';
  purseTotalLi.classList.add('action');
}

var collectInterest = function(){

}

var addToLog = function(event){
  var logLiCommand = document.createElement('li');
  logLiCommand.textContent = promptBox.value;


    if (promptBox.value === 'purse') {    
      pullOutpurse();
    } else if (promptBox.value === 'collect interest') {
      collectInterest(); {
    } else if (prompt.Box.value === 'collect') {
      collectDebts();
    } else if (prompt.Box.value === 'set interest rate to') {
      setInterest();
    }



  log.appendChild(logLiCommand);
  promptBox.value = "";
}



promptBox.addEventListener('keypress',function(event) {
 if (event.keyCode === 13) {
  addToLog();
 }
});

> purse
> ledger
>





});