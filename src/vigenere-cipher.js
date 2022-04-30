const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor (isDirect = true) {
    this.reverse = !isDirect
  }

  encrypt(str, key) {
    if(str === undefined || key === undefined) throw new Error('Incorrect arguments!')

    if(this.reverse == true) {
      str = str.split('').reverse().join('')
      key = key.split('').reverse().join('')
    }

    const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";	

    let trimmedStr = str.replace(/\s/g, '')
    key = key.repeat(Math.floor(trimmedStr.length / key.length) ? trimmedStr.length / key.length : 1);
    key = (key + key.substr(0,trimmedStr.length % key.length)).toUpperCase()
    str = str.toUpperCase()
    let keyArr = key.split('')
    let strArr = str.split('')
    strArr.forEach((element, index) => {
      if (element == ' ') {
        keyArr.splice(index,0, element)
      }
    });


    let finalStr = [];

    for (let i = 0; i < strArr.length; i++) {
      if (!a.includes(str[i])) {
        finalStr.push(str[i])
      } else {
      let position = a.indexOf(strArr[i])
      let shift = a.indexOf(keyArr[i])
      finalStr.push(a[(position + shift) % 26])
      }
    }

    return finalStr.join('')
  }

  decrypt(str, key) {
    if(str === undefined || key === undefined) throw new Error('Incorrect arguments!')

    if(this.reverse == true) {
      str = str.split('').reverse().join('')
      key = key.split('').reverse().join('')
    }

    const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";	

    let trimmedStr = str.replace(/\s/g, '')
    key = key.repeat(Math.floor(trimmedStr.length / key.length) ? trimmedStr.length / key.length : 1);
    key = (key + key.substr(0,trimmedStr.length % key.length)).toUpperCase()
    str = str.toUpperCase()
    let keyArr = key.split('')
    let strArr = str.split('')
    strArr.forEach((element, index) => {
      if (element == ' ') {
        keyArr.splice(index,0, element)
      }
    });

    let finalStr = [];

    for (let i = 0; i < strArr.length; i++) {
      if (!a.includes(str[i])) {
        finalStr.push(str[i])
      } else {
      let position = a.indexOf(strArr[i])
      let shift = a.indexOf(keyArr[i])
      finalStr.push(a.slice((position - shift), (position - shift) == -1 ? undefined : (position - shift) + 1 )[0])
      }
    }

    return finalStr.join('')


  }
}

module.exports = {
  VigenereCipheringMachine
};
