
const isAdult = function (age) {
  if (age >= 18) {
    return true;
  }
  return false;
}


const checkMultiplicity = function (firstNumber, secondNumber) {
  // const firstNumber = +prompt('Введите первое число');
  // const secondNumber = +prompt('Введите второе число');


  if (firstNumber % secondNumber === 0) {
    return true;
  }
  return false;
}

console.log(checkMultiplicity())

const isTriangle = function(a, b, c) {
  // const firstSide = +prompt('Введите первую сторону');
  // const secondSide = +prompt('Введите второую сторону');
  // const thirdSide = +prompt('Введите третью сторону');

  if(a > 0 && b > 0 && c > 0) {
    return true;
  }
  return false;
}
