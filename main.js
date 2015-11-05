$(document).ready(function() {
  console.log('linked!');

var promptBox = document.getElementById('prompt');
var log = document.getElementById('log');
var purse = 10000;
var ledgerDebtors = [];
var ledgerAmounts = [];

var pullOutPurse = function(){
  var purseTotalLi = document.createElement('li');
  purseTotalLi.textContent = 'ShylockBot pulls out his purse containing ' + purse + 
  ' ducats.';
  purseTotalLi.classList.add('action');
  log.appendChild(purseTotalLi);
};

var lendMoney = function(){
  var command = promptBox.value;
  var commandArray = command.split(" ");
  ledgerDebtors.push(commandArray[1]);
  ledgerAmounts.push(commandArray[2]);

  var lendMoneyLi = document.createElement('li');
  lendMoneyLi.textContent = 'ShylockBot gives ' + commandArray[1] + ' ' + commandArray[2] + ' ducats';
  lendMoneyLi.classList.add('action');
  log.appendChild(lendMoneyLi);
};

var trackLoans = function(){
  var command = promptBox.value;
  // console.log(promptBox.value);
  var commandArray = command.split(" ");
  purse -= parseInt(commandArray[2]);
};

var listDebts = function(){
  var ledgerLi = document.createElement('li');
  ledgerLi.textContent = 'ShylockBot pulls out his ledger';
  ledgerLi.classList.add('action');
  log.appendChild(ledgerLi);
  // var debts = document.createElement('ul');
  // ledgerLi.appendChild(debts);
  // console.log(ledgerDebtors)
  for (var i = 0; i < ledgerDebtors.length; i++) {
    var debtorsLi = document.createElement('li');
    // console.log(ledgerDebtors);
    debtorsLi.textContent = ledgerDebtors[i] + ' owes me ' + ledgerAmounts[i] + ' ducats';
    debtorsLi.classList.add('quote');
    // debtorsLi.classList.add('quote'); 
    log.appendChild(debtorsLi);
  }
};

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
    } else if (promptBox.value === 'ledger') {
      listDebts();
    }
    // } else if (promptBox.value === 'collect interest') {
    //   collectInterest(); {
    // } else if (prompt.Box.value === 'collect') {
    //   collectDebts();

  promptBox.value = "";
};

promptBox.addEventListener('keypress',function(event) {
 if (event.keyCode === 13) {
  addToLog();
 }
});

});