let id = 1; // This will auto-increment for each user

function createUserProfiles(originalNames, modifiedNames) {
  if (originalNames.length !== modifiedNames.length) {
    throw new Error("The two arrays must have the same length!");
  }
  
  return originalNames.map((originalName, index) => {
    return {
      id: id++,
      originalName: originalName,
      modifiedName: modifiedNames[index]
    }
  });
}

module.exports = { createUserProfiles }; // Export for use in other files