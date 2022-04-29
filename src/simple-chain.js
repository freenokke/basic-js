const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  position: 0,
  chainLength: 0,
  getLength() {
    return this.chainLength
  },
  addLink(value) {
    if (this.arrayOfString) this.arrayOfString.push(`( ${value} )`)
    else this.arrayOfString = [`( ${value} )`]
    this.chainLength++
    return this
  },
  removeLink(position) {
    if (position <= 0 || position > this.arrayOfString.length || isNaN(position) || !Number.isInteger(position)) {
      this.arrayOfString.length = 0
      throw new Error('You can\'t remove incorrect link!')
    } else {
      position = position - 1
      this.arrayOfString.splice(position,1)
      this.chainLength--
      return this
    }
  },
  reverseChain() {
    this.arrayOfString.reverse()
    return this
  },
  finishChain() {
    let fullString = this.arrayOfString.join('~~')
    this.arrayOfString.length = 0
    return fullString
  }
};

module.exports = {
  chainMaker
};
