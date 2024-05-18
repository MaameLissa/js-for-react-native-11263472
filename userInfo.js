const{processArray,formatArrayString} = require("./arrayManipulation")
let id = 1;
function createUserProfiles(sourceLabel, alteredNames) {
  if (sourceNames.length !== alteredNames.length) {
    throw new Error("The two arrays must have an equal number of elements!");
  }

  return sourceNames.map((sourceName, index) => {
    return {
      id: id++,
      sourceName: sourceName,
      alteredName: alteredNames[index]
     
    }
  });
}

