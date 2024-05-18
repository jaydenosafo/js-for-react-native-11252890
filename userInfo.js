const {formatArrayStrings, processArray, strArr, numbers} = require('./arrayManipulation');

const processNumbers = processArray(numbers);
const modifiedOutput = formatArrayStrings(strArr, processNumbers);

function createUserProfiles( names, modifiedName) {
  return names.map ((names, index) => ({
    originalName: names,
    modifiedName: modifiedName[index],
    id: index++
  }));
}

const names = createUserProfiles(strArr, modifiedOutput);
console.log(names);

module.exports= {
  createUserProfiles
}