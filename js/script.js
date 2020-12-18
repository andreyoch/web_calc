document.addEventListener('DOMContentLoaded', (e) => {
  const operands = document.querySelectorAll('.operand');
  const operators = document.querySelectorAll('.operator');
  const clearButton = document.querySelector('#clear');
  const output = document.querySelector('.output');
   operands.forEach((operand) => document.addEventListener('click', showOutput));
   clearButton.addEventListener('click', clearOutput);
   
});

function operate(operator, numberOne, numberTwo) {}

/*
Show output as sum of output.value & button.value 
*/
function showOutput(e) {
  if (e.target.className === 'operand') {
    if (output.value.length < 8) {
      let buttonValue = e.target.textContent;
      output.value += buttonValue;
    }
  }
}

function clearOutput() {
   output.value = '';
}