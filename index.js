
const isAdult = function (age) {
  if (age >= 18) {
    return true;
  }
  return false;
}


const checkMultiplicity = function () {
  const firstNumber = +prompt('Введите первое число');
  const secondNumber = +prompt('Введите второе число');


  if (firstNumber % secondNumber === 0) {
    return true;
  }
  return false;
}

console.log(checkMultiplicity());