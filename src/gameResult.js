/* eslint-disable */

import { checkRows, rowConditions } from './winnings'
import { REEL_FACE_NAMES } from './constants/faces'

export default class GameResult {
  constructor (fullReelState) {
    this.reelState = fullReelState
  }

  getWinnings () {
    const rows = this.getFaceNames()


    const allWinnings = Object.keys(rowConditions)
      .map(item => checkRows(item, rows))
      .filter(item => item.amount)

    if (!allWinnings.length) return

    const amount = Math.max(...allWinnings.map(winning => winning.amount))
    const { row, kind } = allWinnings.find(item => item.amount === amount)

    return {
      row,
      amount,
      kind
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
