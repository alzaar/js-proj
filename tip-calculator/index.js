let bill = document.querySelector('input[name=bill]');
const tip = document.querySelector('input[name=tip]')
const select = document.querySelector('select[name=options]');
let category = select[select.selectedIndex].value;
let tipPercent = findTip();
let billAmount = 0;
let warning = document.querySelector('#warning');

tip.addEventListener('keydown', (e) => e.preventDefault());
bill.addEventListener('keydown', calculate);

function findTip() {
  switch(category) {
    case 'good':
      return .30;
      break;
    case 'bad':
      return 0;
      break;
    case 'ok':
      return .15;
      break;
    default:
      return 1;
      break;
  }
}

function calculate(e) {
  category = select[select.selectedIndex].value;
  tipPercent = findTip();
  billAmount = parseInt(bill.value, 10);

  if (isNaN(billAmount)) {
    warning.innerHTML = 'Please enter a number';
    return;
  }
  warning.innerHTML = "";
  const result = (billAmount * tipPercent).toFixed(2);
  tip.value = result;
}
