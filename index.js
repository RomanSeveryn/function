const isAdult = function (age) {
  if (isNaN(age)) {
    console.log('Невалидное число')
  } else {
    if (age >= 18) {
      return true;
    }
  }
  return false;
}




const checkMultiplicity = function (firstNumber, secondNumber) {
  if (firstNumber % secondNumber === 0) {
    return true;
  }
  return false;
}




const isTriangle = function (a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    return true;
  }
  return false;
}


const areaRhombus = function(diagonalVertical, diagonalHorizontal) {
  if(isNaN(diagonalVertical - diagonalHorizontal)) {
    return false;
  } else {
    return diagonalVertical * diagonalHorizontal / 2;
  }
}



const areaCylinder = function(heightCylinder, radiusCylinder) {
  // S = 2 * 3.14 * r(h + r);
  if(isNaN(heightCylinder - radiusCylinder)) {
    return false;
  } else {
    return (2 * 3.14 * radiusCylinder) *(heightCylinder + radiusCylinder);
  }
}


const areaTriangle = function(baseSide, heightTriangle) {
  if(isNaN(baseSide - heightTriangle)) {
    return false;
  } else  {
    return 1/2 * baseSide * heightTriangle;
  }
}








const areaRectangle = function(sideLateral, sideBase) {
  if(isNaN(sideLateral - sideBase)){
    return false;
  } else {
    return sideLateral * sideBase;
  }
}