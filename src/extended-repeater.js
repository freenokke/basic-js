const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!typeof options.repeatTimes == 'number' || !Number.isInteger(options.repeatTimes)) options.repeatTimes = 1
  if (!typeof options.additionRepeatTimes == 'number' || !Number.isInteger(options.additionRepeatTimes)) options.additionRepeatTimes = 1
  if ('addition' in options && options.addition == null) options.addition = 'null'


  let additionsArr = []
  for (let i=0; i < options.additionRepeatTimes; i++) {
    additionsArr.push(options.addition)
  }
  joinedAdditionsArr = additionsArr.join(options.additionSeparator || '|')
  let stringArr = []
  for (let i=0; i < options.repeatTimes; i++) {
    stringArr.push(str + joinedAdditionsArr)
}
  joinedStringArr = stringArr.join(options.separator || '+')
  return joinedStringArr
}

module.exports = {
  repeater
};
