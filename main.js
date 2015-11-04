$(document).ready(function() {
  console.log('linked!');

var promptBox = document.getElementById('prompt');
var log = document.getElementById('log');
var purse = 10000;
var ledger = {};

var pullOutPurse = function(){
  var purseTotalLi = document.createElement('li');
  purseTotalLi.textContent = 'ShylockBot pulls out his purse containing ' + purse + 
  ' ducats.';
  purseTotalLi.classList.add('action');
  log.appendChild(purseTotalLi);
}

var lendMoney = function(){
  var command = promptBox.value;
  var commandArray = command.split(" ");
  ledger.action = commandArray[0];
  ledger.lender = commandArray[1];
  ledger.amount = commandArray[2];
  var lendMoneyLi = document.createElement('li');
  lendMoneyLi.textContent = 'ShylockBot gives ' + commandArray[1] + ' ' + commandArray[2] + ' ducats';
  lendMoneyLi.classList.add('action');
  log.appendChild(lendMoneyLi);
}

var trackLoans = function(){
  purseTotalLi.classList.add('action');
  purse -= Ledger.amount;
}

// var collectInterest = function(){}

// var collectDebts = function(){}

var addToLog = function(event){

  var logLiCommand = document.createElement('li');
  var command = promptBox.value;
  var commandArray = command.split(" ");
  logLiCommand.textContent = promptBox.value
  logLiCommand.classList.add('command');
  log.appendChild(logLiCommand);
    if (promptBox.value === 'purse') {    
      pullOutPurse();
    } else if (commandArray[0] === 'lend') {
      lendMoney();
      trackLoans();
    }

    // } else if (promptBox.value === 'ledger') {
    //   trackLoans();
    // } else if (promptBox.value === 'collect interest') {
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