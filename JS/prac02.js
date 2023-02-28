let input = document.querySelectorAll('.inp')
const celsius = input[0]
const fahrenheit = input[1]
const kelvin = input[2]

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('input', function(e) {
        let temp = parseFloat(e.target.value)
        let operation = e.target.name
        switch (operation) {
            case 'celsius':
                fahrenheit.value = ((temp * 1.8) + 32).toFixed(2)
                kelvin.value = (temp + 273.15).toFixed(2)
                break;
            case 'fahrenheit':
                celsius.value = ((temp - 32) / 1.8).toFixed(2)
                kelvin.value = (((temp - 32) / 1.8) + 273.15).toFixed(2)
                break;
            case 'kelvin':
                celsius.value = (temp - 273.15).toFixed(2)
                fahrenheit.value = (((temp - 273.15) * 18) + 32).toFixed(2)
                break;
        }
    })
}