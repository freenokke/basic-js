const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(...args) {
  let arr = []
  for (let i = 0; i < args[0].length; i++) {
      for (let j = 0; j < args[0][i].length; j++) {
          if(args[0][i][j] === '^^') {
              arr.push(args[0][i][j])
          }
      }
  }
  return arr.length
}

module.exports = {
  countCats
};
