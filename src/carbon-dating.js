const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(arg) {
  console.log(arg)
  if (typeof arg !== 'string') return false
  if (Number(arg) >= 15 || Number(arg) <= 0) return false
  if (arg == '') return false
  if (isNaN(arg)) return false
  arg = Number(arg)
  if (Number.isInteger(arg)) {
    arg = Math.ceil(arg)
  }
  const k = 0.693 / HALF_LIFE_PERIOD
  const t = (Math.log(MODERN_ACTIVITY / arg)) / k
  return Math.ceil(t)
}

module.exports = {
  dateSample
};


