const input = require('fs').readFileSync('input.txt', 'utf-8')

console.log(input.trim().split('\n').map(line => line.split(',').map(range => range.split('-').map(Number))).map(([[a1, a2], [b1, b2]]) => (a1 <= b1 && a2 >= b2) || (a1 >= b1 && a2 <= b2)).reduce((acc, cur) => cur ? acc + 1 : acc, 0))

console.log(input.trim().split('\n').map(line => line.split(',').map(range => range.split('-').map(Number))).map(([[a1, a2], [b1, b2]]) => (a2 >= b1 && a1 <= b2)).reduce((acc, cur) => cur ? acc + 1 : acc, 0))