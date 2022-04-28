const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
  let copyArr = [...arr]
  copyArr.map((item, index, array) => {
    console.log(`Array ${array}, Item ${item}, Index ${index}`)
      switch (item) {
        case '--discard-next':
          if (typeof array[index+1] == 'number') {
            array.splice(index, 2)
          }
          if (typeof array[index] == 'string') array.splice(index,1)
          break;
        case '--discard-prev':
          if (array[index-1]) array.splice(index - 1, 2)
          else array.splice(index, 1)
          break;
        case '--double-next':
          if (array[index+1]) array.splice(index, 1, array[index + 1])
          else array.splice(index, 1)
          break;
        case '--double-prev':
          if (array[index-1]) array.splice(index, 1, array[index - 1])
          else array.splice(index, 1)
          break;
        default:
          break
      }
  })
  return copyArr
}

module.exports = {
  transform
};
