import { luckyNumberFromID } from './id_fortune_teller';
import { TEMPLATE, executeTemplate } from './template.js';
import data from './data.json';

function showResult(number) {
  const luckyNumber = String(number);
  $('#result').html(
    executeTemplate(TEMPLATE, luckyNumber, data[luckyNumber].img, data[luckyNumber].name, data[luckyNumber].info)
  );
}

function showInputError() {
  $('#result').html(`<div class="col-md-12 alert alert-danger" role="alert">
    Please Enter Only 3 Digits</div>`
  );
}

$(function(){
  $('input').keyup(function(e) {
    if (e.keyCode == 13) {
      execute();
    }
  });
  $('button').click(function() {
    execute();
  });
});

function execute() {
  const inputValue = $('input').val();
  if (inputValue.length == 0 || inputValue.length > 3) {
    showInputError();
    return;
  }
  const number = luckyNumberFromID(inputValue)
  if (number <= 0) {
    showInputError();
    return;
  }
  showResult(number);
}
