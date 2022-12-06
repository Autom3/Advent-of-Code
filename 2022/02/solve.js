const input = require('fs').readFileSync('input.txt', 'utf-8')

const rules = [
  [1, 2, 0],
  [0, 1, 2],
  [2, 0, 1]
]

console.log(input.trim().split('\n').map(line => line.split(' ')).map(([opp, you]) => [opp.charCodeAt(0) - 'A'.charCodeAt(0), you.charCodeAt(0) - 'X'.charCodeAt(0)]).reduce((acc, [opp, you]) => acc + you + 1 + rules[opp][you] * 3, 0))

console.log(input.trim().split('\n').map(line => line.split(' ')).map(([opp, out]) => [opp.charCodeAt(0) - 'A'.charCodeAt(0), out.charCodeAt(0) - 'X'.charCodeAt(0)]).reduce((acc, [opp, out]) => acc + rules[opp].indexOf(out) + 1 + out * 3, 0))
