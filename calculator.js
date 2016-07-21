const results = document.getElementById('results');

const button1 = document.getElementById('num-1');
button1.onclick = function () {
  results.value += button1.innerText;
};

const button2 = document.getElementById('num-2');
button2.onclick = function () {
  results.value += button2.innerText;
};

const button3 = document.getElementById('num-3');
button3.onclick = function () {
  results.value += button3.innerText;
};
let firstNumber;
let lastCommand;

const buttonPlus = document.getElementById('addition');
buttonPlus.onclick = function () {
  firstNumber = results.value;
  results.value = '';

// saving
  lastCommand = '+';
};

const equals = document.getElementById('equals');
equals.onclick = function () {
  if (lastCommand === '+') {
    let product = Number(firstNumber) + Number(results.value);
  }
  if (lastCommand === '-') {
    let product = Number(firstNumber) - Number(results.value);
  }
  if (lastCommand === '/') {
    let product = Number(firstNumber) / Number(results.value);
  }

  if (lastCommand === '*') {
    let product = Number(firstNumber) * Number(results.value);
  }
  results.value = product;

  firstNumber = '';
  lastCommand = '';
};

const button4 = document.getElementById('num-4');
button4.onclick = function () {
  results.value += button4.innerText;
};

const button5 = document.getElementById('num-5');
button5.onclick = function () {
  results.value += button5.innerText;
};

const button6 = document.getElementById('num-6');
button6.onclick = function () {
  results.value += button6.innerText;
};

const subtraction = document.getElementById('subtraction');
subtraction.onclick = function () {
  firstNumber = results.value;
  results.value = '';
  lastCommand = '-';
};

const button7 = document.getElementById('num-7');
button7.onclick = function () {
  results.value += button7.innerText;
};

const button8 = document.getElementById('num-8');
button8.onclick = function () {
  results.value += button8.innerText;
};

const button9 = document.getElementById('num-9');
button9.onclick = function () {
  results.value += button9.innerText;
};

const button0 = document.getElementById('num-0');
button0.onclick = function () {
  results.value += button0.innerText;
};

const divide = document.getElementById('divide');
  divide.onclick = function () {
    firstNumber = results.value;
    results.value = '';
    lastCommand = '/';
  };

const multiply = document.getElementById('multiply');
  multiply.onclick = function () {
    firstNumber = results.value;
    results.value = '';
    lastCommand = '*';
  };

const clear = document.getElementById('clear');
clear.onclick = function () {
  results.value = '';
  firstNumber = '';
  lastCommand = '';
};
