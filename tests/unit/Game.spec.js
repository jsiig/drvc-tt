import { expect } from 'chai'
import Game from '@/Game.js'

describe('Game', () => {
  it('generates random result with length of 3 defined values', () => {
    const game = new Game()
    const rollResults = game.roll()
    expect(rollResults.length).to.eq(3)
    rollResults.forEach(rollValue => {
      expect(rollValue).to.not.eq(null)
      expect(rollValue).to.be.a('number')
    })
  })

  it('accepts user input for debugging and translates it correctly to all middle row values', () => {
    const game = new Game(
      [
        {
          value: 2,
          row: 'middle'
        },
        {
          value: 5,
          row: 'top'
        },
        {
          value: 6,
          row: 'middle'
        }
      ]
    )
    expect(game.roll()).to.deep.eq([2, 4, 6])
  })
})
