const input = require('fs').readFileSync('input.txt', 'utf-8')

console.log(input.split('').findIndex((_, i, arr) => arr.slice(i, i + 4).every((c, _, arr2) => arr2.filter(v => v === c).length === 1)) + 4)

console.log(input.split('').findIndex((_, i, arr) => arr.slice(i, i + 14).every((c, _, arr2) => arr2.filter(v => v === c).length === 1)) + 14)