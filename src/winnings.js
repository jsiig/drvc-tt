const DEFAULT_WINNINGS = {
  amount: null,
  row: null
}

const BAR_SYMBOLS = ['3xBAR', '2xBAR', 'BAR']

export const winningsTable = [
  {
    kind: 'allCherries',
    description: 'All cherries on row',
    wins: {
      top: 2000,
      middle: 1000,
      bottom: 4000
    }
  },
  {
    kind: 'allSevens',
    description: 'All sevens on any row',
    wins: {
      all: 150
    }
  },
  {
    kind: 'all3Bars',
    description: 'All 3xBARs on any row',
    wins: {
      all: 50
    }
  },

  {
    kind: 'all2Bars',
    description: 'All 2xBARs on any row',
    wins: {
      all: 20
    }
  },
  {
    kind: 'allBars',
    description: 'All BARs on any row',
    wins: {
      all: 10
    }
  },
  {
    kind: 'anyCherryAndSeven',
    description: 'Any cherry and seven on a row',
    wins: {
      all: 75
    }
  },
  {
    kind: 'anyBarSymbols',
    description: 'Any bar symbols combined on any row',
    wins: {
      all: 5
    }
  }
]

const getSpecificOrAny = (wins, row) => wins.all ? wins.all : wins[row]
const getWinningAmounts = (kind, row) => getSpecificOrAny(winningsTable.find(item => item.kind === kind).wins, row)

export const rowConditions = {
  allCherries: row => row.every(item => item === 'CHERRY'),
  allSevens: row => row.every(item => item === '7'),
  all3Bars: row => row.every(item => item === '3xBAR'),
  all2Bars: row => row.every(item => item === '2xBAR'),
  allBars: row => row.every(item => item === 'BAR'),
  anyCherryAndSeven: row => row.includes('CHERRY') && row.includes('7'),
  anyBarSymbols: row => row.filter(symbol => BAR_SYMBOLS.includes(symbol)).length === 3
}

export const checkRows = (condition, rows) => {
  const winnings = {
    ...DEFAULT_WINNINGS,
    kind: 'allCherries'
  }

  Object.keys(rows).forEach(rowName => {
    const row = rows[rowName]
    if (rowConditions[condition](row)) {
      winnings.amount = getWinningAmounts(winnings.kind, rowName)
      winnings.row = rowName
      winnings.kind = condition
    }
  })

  return winnings
}
