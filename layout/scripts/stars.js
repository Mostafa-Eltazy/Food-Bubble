function start() {
  const but5 = document.getElementById('star-5');
  const but4 = document.getElementById('star-4');
  const but3 = document.getElementById('star-3');
  const but2 = document.getElementById('star-2');
  const but1 = document.getElementById('star-1');

  but1.addEventListener('click', Add1);
  but2.addEventListener('click', Add2);
  but3.addEventListener('click', Add3);
  but4.addEventListener('click', Add4);
  but5.addEventListener('click', Add5);
}

let total = 0.0;
let n = 0;
let score = 0;

const Add1 = () => {
  total = total + 1;
  n = n + 1;
  score = total / n;
  document.getElementById('StarScore').innerHTML =
    'Users Rate: ' + score.toFixed(1) + ' / 5.0';
};
const Add2 = () => {
  total = total + 2;
  n = n + 1;
  score = total / n;
  document.getElementById('StarScore').innerHTML =
    'Users Rate: ' + score.toFixed(1) + ' / 5.0';
};
const Add3 = () => {
  total = total + 3;
  n = n + 1;
  score = total / n;
  document.getElementById('StarScore').innerHTML =
    'Users Rate: ' + score.toFixed(1) + ' / 5.0';
};
const Add4 = () => {
  total = total + 4;
  n = n + 1;
  score = total / n;
  document.getElementById('StarScore').innerHTML =
    'Users Rate: ' + score.toFixed(1) + ' / 5.0';
};
const Add5 = () => {
  total = total + 5;
  n = n + 1;
  score = total / n;
  document.getElementById('StarScore').innerHTML =
    'Users Rate: ' + score.toFixed(1) + ' / 5.0';
};

window.addEventListener('load', start, false);
