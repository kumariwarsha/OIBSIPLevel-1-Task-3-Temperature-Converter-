const caltemp = () => {
    const numberTemp = document.getElementById('temp').value;
    const tempselected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempselected.selectedIndex].value;
    console.log(valueTemp);
    const celToFah = (cel) => {
        let fahrenheit = Math.round((cel * 9 / 5) + 32);
        return fahrenheit;
    }
    const fahTocel = (fahren) => {
        let celsius = Math.round((fahren - 32) * 5 / 9);
        return celsius;
    }
    let result;

    if (valueTemp == 'celsius') {
        result = celToFah(numberTemp);
        document.getElementById('resultcontainer').innerHTML = '=' + result + "°Fahrenheit";
    }
    else {
        result = fahTocel(numberTemp);
        document.getElementById('resultcontainer').innerHTML = "=" + result + "°celsius";
    }
}