import { luckyNumberFromID } from './id_fortune_teller';
import data from './data.json';

let template = `
  <div class="col-md-4 col-lg-4">
    <img class="img-fluid rounded mb-3" src="{{IMG}}" alt="{{NAME}}">
  </div>
  <div class="col-md-8 col-lg-8 mb-5">
    <h2>ตัวเลขพิเศษของคุณคือ {{NUMBER}}</h2>
    <br>
    <h4>ฮีโร่ประจำตัวของคุณคือ {{NAME}}</h4>
    <div>{{INFO}}</div>
  </div>`;


function showResult(number) {
  const luckyNumber = String(number);
  $('#result').html(
    content(template, luckyNumber, data[luckyNumber].img, data[luckyNumber].name, data[luckyNumber].info)
  );
}

function content(template, number, img, name, info) {
  template = template.replace(/{{NUMBER}}/g, number)
  template = template.replace(/{{IMG}}/g, img)
  template = template.replace(/{{NAME}}/g, name)
  template = template.replace(/{{INFO}}/g, info)
  return template;
}

function showInputError() {
  $('#result').html(`<div class="col-md-12 alert alert-danger" role="alert">
    Please Enter Only 3 Digits</div>`
  );
}

$(function(){
  $('input').keyup(function(e) { 
    if (e.keyCode == 13) {
      console.log(',,,,')
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