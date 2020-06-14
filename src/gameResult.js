/* eslint-disable */

import winnings from './winnings'
import { REEL_FACE_NAMES } from './constants/faces'

export default class GameResult {
  constructor (fullReelState) {
    this.reelState = fullReelState
  }

  getWinnings () {
    const rows = this.getFaceNames()

    const allWinnings = [
      winnings.allCherries(rows),
      winnings.allSevens(rows),
      winnings.all3Bars(rows),
      winnings.all2Bars(rows),
      winnings.allBars(rows),
      winnings.anyCherryAndSeven(rows),
      winnings.anyBarSymbols(rows)
    ].filter(item => item.amount)

    if (!allWinnings.length) return

    const amount = Math.max(...allWinnings.map(winning => winning.amount))
    const { row } = allWinnings.find(item => item.amount === amount)

    return {
      row,
      amount
    }
  }

  getFaceNames () {
    const faceMap = row => row.map(item => this.getFaceName(item))
    const result = {}

    Object.keys(this.reelState).forEach(row => {
      result[row] = faceMap(this.reelState[row])
    })

    return result
  }

  getFaceName (faceValue) {
    return REEL_FACE_NAMES[(faceValue / 2)]
  }
}
