const input = require('fs').readFileSync('input.txt', 'utf-8')

console.log(input.trim().split('\n').flatMap(line => (([direction, amount]) => new Array(Number(amount)).fill({U: [-1, 0], L: [0, -1], D: [1, 0], R: [0, 1]}[direction]))(line.split(' '))).reduce((acc, cur) => {acc.head = acc.head.map((n, i) => n + cur[i]); if (acc.tail.some((n, i) => Math.abs(acc.head[i] - n) > 1)) {acc.tail = acc.tail.map((n, i) => n + Math.sign(acc.head[i] - n)); acc.last.add(acc.tail.join(' '))}; return acc}, {head: [0, 0], tail: [0, 0], last: new Set(['0 0'])}).last.size)

console.log(input.trim().split('\n').flatMap(line => (([direction, amount]) => new Array(Number(amount)).fill({U: [-1, 0], L: [0, -1], D: [1, 0], R: [0, 1]}[direction]))(line.split(' '))).reduce((acc, cur) => {acc.knots[0] = acc.knots[0].map((n, i) => n + cur[i]); acc.knots.slice(1).forEach((knot, i) => {if (knot.some((n, j) => Math.abs(acc.knots[i][j] - n) > 1)) {acc.knots[i + 1] = knot.map((n, j) => n + Math.sign(acc.knots[i][j] - n))}}); acc.last.add(acc.knots.at(-1).join(' ')); return acc}, {knots: Array(10).fill().map(() => [0, 0]), last: new Set(['0 0'])}).last.size)