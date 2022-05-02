const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let obj = str.split('').reduce((acc, item) => {
      acc[item] ? acc[item] += 1 : acc[item] = 1
      return acc
  }, {})
  let arr = Object.entries(obj)
  arr.forEach(item => item.reverse())
  return arr.join('').replace(/[\,1]/g, '')
}

module.exports = {
  encodeLine
};
