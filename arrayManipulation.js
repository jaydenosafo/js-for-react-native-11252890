function processArray (arr) {
  return arr.map(num => (num % 2 === 0) ? num ** 2 : num * 3);
}

const numbers = [1, 2, 3, 4];
const newNumbers = processArray(numbers);
console.log(newNumbers);

function formatArrayStrings(strArr, numArr) {
  return strArr.map((str, index) =>
  (numArr[index] % 2 === 0) ? str.toUpperCase() : str.toLowerCase() );
}

const strArr = ["Jayden", "Kofi", "Ama", "justin"];
const numArr = processArray(numbers);
const finalOutput = formatArrayStrings(strArr, numArr);
console.log(finalOutput);

module.exports = {
  processArray, formatArrayStrings, strArr, numbers
}