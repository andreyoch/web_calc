document.addEventListener('DOMContentLoaded', (e) => {
   const operands = document.querySelectorAll('.operand')
   const output = document.querySelector('.output')
   operands.forEach(operand => document.addEventListener('click', showOutput))
   
})


function operate(operator, numberOne, numberTwo) { }

function showOutput(e) {
   let buttonValue = e.target.textContent;
   output.value += buttonValue;
   
}