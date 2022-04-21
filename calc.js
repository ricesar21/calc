const button = (num) => {
    return value = document.calc.visor.value += num;
}

const reset = () => {
    return document.calc.visor.value = '';
}

const calculate = () => {
    return result = eval(value),
    document.calc.visor.value = result.toLocaleString('pt-br');
}

const del = () => {
    return value = value.substring(0,value.length-1),
    document.calc.visor.value = value;
}