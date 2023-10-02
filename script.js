let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue);
    } catch (error) {
        displayValue = 'Erro';
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
