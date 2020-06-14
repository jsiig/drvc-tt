const DEFAULT_WINNINGS = {
  amount: null,
  row: null
}

export const winningsTable = {

}

export default {
  allCherries (rows) {
    const winnings = DEFAULT_WINNINGS

    Object.keys(rows).forEach((rowName) => {
      const row = rows[rowName]

      if (row.every(item => item === 'CHERRY')) {
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

      if (row.every(item => item === '7')) {
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
      if (row.every(item => item === '3xBAR')) {
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
      if (row.every(item => item === '2xBAR')) {
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
      if (row.every(item => item === 'BAR')) {
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
      if (
        row.filter(symbol => BAR_SYMBOLS.includes(symbol)).length === 3
      ) {
        winnings.row = rowName
        winnings.amount = 5
      }
    })

    return winnings
  }
}
