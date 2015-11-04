$(document).ready(function() {
  console.log('linked!');

var promptBox = document.getElementById('prompt');
var log = document.getElementById('log');
var purse = 10000;

var pullOutPurse = function(){
  var purseTotalLi = document.createElement('li');
  purseTotalLi.textContent = 'ShylockBot pulls out his purse containing ' + purse + 
  ' ducats.';
  purseTotalLi.classList.add('action');
  log.appendChild(purseTotalLi);
}

// var collectInterest = function(){}

// var collectDebts = function(){}



var addToLog = function(event){
  var logLiCommand = document.createElement('li');
  logLiCommand.textContent = promptBox.value
  log.appendChild(logLiCommand);
    if (promptBox.value === 'purse') {    
      pullOutPurse();
    } else if (promptBox.value === 'ledger') {

    }

    // else if (promptBox.value === 'collect interest') {
    //   collectInterest(); {
    // } else if (prompt.Box.value === 'collect') {
    //   collectDebts();

  promptBox.value = "";
}



promptBox.addEventListener('keypress',function(event) {
 if (event.keyCode === 13) {
  addToLog();
 }
});









});