function letterPosition(str) {
  let noSpaces = str.split(" ").join("").split("");
  let result = {};
  for (var i = 0; i < noSpaces.length; i++) {
    if (!result[noSpaces[i]]) {
      result[noSpaces[i]] = [i];
    } else {
      result[noSpaces[i]].push(i);
    }
  }
  return result;
}
console.log(letterPosition("lighthouse in the house"));