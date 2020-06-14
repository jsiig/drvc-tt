/* eslint-disable */
import { REEL_FACES, REEL_FACE_NAMES } from './constants/faces'

const randomInt = max => Math.ceil(Math.random() * Math.floor(max))
const MAX = 9

const DEFAULT_WINNINGS = {
  amount: null,
  row: null
}

const winnings = {
  allCherries (rows) {
    const winnings = DEFAULT_WINNINGS

    Object.keys(rows).forEach((rowName) => {
      const row = rows[rowName]

      if (row.all(item => item === 'CHERRY')) {
        winnings.row = rowName
        switch (rowName) {
          case 'top':
            winnings.amount = 2000
            break
          case 'middle':
            winnings.amount = 1000
            break
          case 'bottom':
            winnings.amount = 4000
        }
      }
    })

    return winnings
  },

  allSevens (rows) {
    const winnings = DEFAULT_WINNINGS

    Object.keys(rows).forEach(rowName => {
      const row = rows[rowName]

      if (row.all(item => item === '7')) {
        winnings.row = rowName
        winnings.amount = 150
      }
    })
    return winnings
  },

  all3Bars (rows) {
    const winnings = DEFAULT_WINNINGS

    Object.keys(rows).forEach(rowName => {
      const row = rows[rowName]
      if (row.all(item => item === '3xBAR')) {
        winnings.row = rowName
        winnings.amount = 50
      }
    })

    return winnings
  },

  all2Bars (rows) {
    const winnings = DEFAULT_WINNINGS

    Object.keys(rows).forEach(rowName => {
      const row = rows[rowName]
      if (row.all(item => item === '2xBAR')) {
        winnings.row = rowName
        winnings.amount = 20
      }
    })

    return winnings
  },

  allBars (rows) {
    const winnings = DEFAULT_WINNINGS

    Object.keys(rows).forEach(rowName => {
      const row = rows[rowName]
      if (row.all(item => item === 'BAR')) {
        winnings.row = rowName
        winnings.amount = 10
      }
    })

    return winnings
  },

  anyCherryAndSeven (rows) {
    const winnings = DEFAULT_WINNINGS

    Object.keys(rows).forEach(rowName => {
      const row = rows[rowName]
      if (
        row.includes('CHERRY') && row.includes('7')
      ) {
        winnings.row = rowName
        winnings.amount = 75
      }
    })

    return winnings
  },

  anyBarSymbols (rows) {
    const winnings = DEFAULT_WINNINGS

    Object.keys(rows).forEach(rowName => {
      const row = rows[rowName]
      const BAR_SYMBOLS = ['3xBAR', '2xBAR', 'BAR']
    })

    return winnings
  }
}

export class GameResult {
  constructor (fullReelState) {
    this.reelState = fullReelState
  }

  getWinnings () {
    const rows = this.getFaceNames()

    return [
      winnings.allCherries(rows),
      winnings.allSevens(rows),
      winnings.all3Bars(rows),
      winnings.all2Bars(rows),
      winnings.anyCherryAndSeven(rows)
    ].filter(item => item.amount)
  }

  getFaceNames () {
    return Object.keys(this.reelState).map(row => {
      return this.reelState[row].map(item => this.getFaceName(item))
    })
  }

  getFaceName (faceValue) {
    return REEL_FACE_NAMES[(faceValue / 2)]
  }
}

export default class Game {
  generateRandom () {
    return [randomInt(MAX), randomInt(MAX), randomInt(MAX)]
  }

}
