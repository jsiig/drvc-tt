/* eslint-disable */
import translateDirection from './translateDirection'

const randomInt = max => Math.ceil(Math.random() * Math.floor(max))
const MAX = 9


export default class Game {
  constructor (userInput = []) {
    this.userInput = userInput
  }

  roll () {
    if (!this.userInput.length) return this.generateRandom()
    else return this.debugResult()
  }

  generateRandom () {
    return [randomInt(MAX), randomInt(MAX), randomInt(MAX)]
  }

  debugResult () {
    if (
      !this.userInput.every(
        item => item.row.length &&
          typeof item.value !== 'undefined'
      )
    ) return

    const middleRowItems = this.userInput.map(item => {
      let middleRowItem
      switch (item.row) {
        case 'top':
          middleRowItem = translateDirection.translateSingle(item.value, 'down')
          break;
        case 'middle':
          middleRowItem = item.value
          break;
        case 'bottom':
          middleRowItem = translateDirection.translateSingle(item.value, 'up')
          break;
        default:
          break;
      }

      return middleRowItem
    })

    return [
      ...middleRowItems
    ]
  }
}
