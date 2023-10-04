function convert(from) {
    if (from === 'celsius') {
        const celsius = parseFloat(document.getElementById('celsiusInput').value);
        const fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById('fahrenheitInput').value = fahrenheit.toFixed(2);
    } else if (from === 'fahrenheit') {
        const fahrenheit = parseFloat(document.getElementById('fahrenheitInput').value);
        const celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById('celsiusInput').value = celsius.toFixed(2);
    }
}
