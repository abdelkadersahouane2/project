let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    let result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    displayValue = '';
  }
}

  document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === 'Enter') {
      calculate();
    } else if (key === 'Escape') {
      clearDisplay();
    } else if (key === 'Backspace') {
      displayValue = displayValue.slice(0, -1);
      document.getElementById('display').value = displayValue;
    } else if (!isNaN(key) || key === '.') {
      appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%' || key === '(' || key === ')' || key === '^') {
      appendToDisplay(key);
    }
  });
  