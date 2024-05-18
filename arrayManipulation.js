function processArray(Input){
  let newInput = Input.map(value =>{
    if (value % 2 === 0)
  {
    return Math.pow(value,2);
  }else{
    return value * 3;
  }})
  return newInput;
}

function formatArrayStrings(stringCharacters, processedNumbers) {
  if (stringCharacters.length !== processedNumbers.length) {
    throw new Error("Ensure both arrays match in length.");
  }
  return stringCharacters.map((str, index) => {
    const number = processedNumbers[index];
    if (number % 2 === 0) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  });
}

