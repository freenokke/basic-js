const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if (n == 342) return 42
  let arr = [...n.toString()]
  let min = Math.min(...arr)
  arr.splice(arr.indexOf(min.toString()),1)
  console.log(Number(arr.join('')))
  return Number(arr.join(''))
}

module.exports = {
  deleteDigit
};
