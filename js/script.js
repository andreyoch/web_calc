document.addEventListener('DOMContentLoaded', (e) => {
   const operands = document.querySelectorAll('.operand')
   const output = document.querySelector('.output')
   operands.forEach(operand => document.addEventListener('click', showOutput))
   
})


function operate(operator, numberOne, numberTwo) { }

/*
Show output as sum of output.value & button.value 
*/
function showOutput(e) {
   if (e.target.className === 'operand') {
      if (output.value.length < 8) {
         console.log(output.value.length)
         let buttonValue = e.target.textContent;
         output.value += buttonValue;
      }
   }
}

