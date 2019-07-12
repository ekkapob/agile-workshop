export function luckyNumberFromID(id) {
  if (typeof id != 'string') return -1;
  if (isNaN(parseInt(id))) return -1;
  if (!Number.isInteger(parseFloat(id))) return -1;
  if (parseInt(id) < 0) return -1;

  let sumOfThreeDigits = getIntFromString(id, 0) +
    getIntFromString(id, 1) +
    getIntFromString(id, 2); 
  sumOfThreeDigits = String(sumOfThreeDigits);
  return getIntFromString(sumOfThreeDigits, 0) + getIntFromString(sumOfThreeDigits, 1);
}

function getIntFromString(value, index) {
  let result = parseInt(value[index]);
  return isNaN(result) ? 0 : result;
}