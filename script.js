// Obtener referencia al elemento de la pantalla de visualización
const display = document.getElementById('display');

// Función para calcular si un número es capicúa
function isPalindrome(num) {
    const numStr = num.toString();
    const reverseNumStr = numStr.split('').reverse().join('');
    return numStr === reverseNumStr;
}

// Función para mostrar el resultado en la pantalla
function showResult(result) {
    display.value = result;
}

// Función para agregar el número presionado a la pantalla
function addToDisplay(number) {
    display.value = display.value + number;
}

// Función para calcular el resultado cuando se hace clic en el botón de igual (=)
function calculate() {
    try {
        const value = display.value;
        const number = parseInt(value);

        if (isNaN(number) || number < 0 || number > 10) {
            showResult('Error: Ingrese un número válido del 0 al 10');
        } else {
            const isPalindromeResult = isPalindrome(number);
            showResult(isPalindromeResult ? 'Es Capicua' : 'No es Capicua');
        }
    } catch (error) {
        showResult('Error');
    }
}

// Función para limpiar la pantalla
function clearDisplay() {
    display.value = '';
}
