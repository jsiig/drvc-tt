import { expect } from 'chai'
import GameResult from '@/GameResult.js'

describe('GameResult', () => {
  describe('getting winnings', () => {
    it('for cherry and seven (6, 8), on last row', () => {
      const gameResult = new GameResult({
        top: [2, 4, 6],
        middle: [3, 5, 7],
        bottom: [4, 6, 8]
      })

      expect(gameResult.getWinnings()).to.deep.eq({
        row: 'bottom',
        amount: 75,
        kind: 'anyCherryAndSeven'
      })
    })

    it('for all 3xBARs, on first row', () => {
      const gameResult = new GameResult({
        top: [0, 0, 0],
        middle: [1, 1, 1],
        bottom: [2, 2, 2]
      })

      expect(gameResult.getWinnings()).to.deep.eq({
        row: 'top',
        amount: 50,
        kind: 'all3Bars'
      })
    })

    it('for all cherries, on middle row', () => {
      const gameResult = new GameResult({
        top: [7, 7, 7],
        middle: [8, 8, 8],
        bottom: [9, 9, 9]
      })

      expect(gameResult.getWinnings()).to.deep.eq({
        row: 'middle',
        amount: 1000,
        kind: 'allCherries'
      })
    })

    it('no winnings', () => {
      const gameResult = new GameResult({
        top: [7, 2, 7],
        middle: [8, 3, 8],
        bottom: [9, 4, 9]
      })

      expect(gameResult.getWinnings()).to.eq(undefined)
    })
  })
})
