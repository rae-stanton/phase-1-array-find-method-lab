const winRecord = [
  { year: 1997, result: 'L' },
  { year: 1998, result: 'W' },
  { year: 1999, result: 'L' },
  { year: 2015, result: 'L' },
];

const noWins = [
  { year: 2000, result: "L" },
  { year: 2001, result: "L" },
]


function superbowlWin(record) {
  const winRecord = record.find(game => game.result === 'W');

  if (winRecord) {
    return winRecord.year;
    } else {
      return undefined;
    }
  }
