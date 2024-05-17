function processArray(Puzzle){
  let newPuzzle = Puzzle.map(value =>{
    if (value % 2 === 0)
  {
    return Math.pow(value,2);
  }else{
    return value * 3;
  }})
  return newPuzzle;
}

function formatArrayStrings(strCharacters, processedNumbers) {
  if (strCharacters.length !== processedNumbers.length) {
    throw new Error("Ensure both arrays match in length.");
  }
  return strCharacters.map((str, index) => {
    const number = processedNumbers[index];
    if (number % 2 === 0) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  });
}

