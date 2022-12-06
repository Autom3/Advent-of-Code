const input = require('fs').readFileSync('input.txt', 'utf-8')

console.log(Math.max(...input.trim().split('\n\n').map(elf => elf.trim().split('\n').map(Number).reduce((a, b) => a + b))))

console.log(input.trim().split('\n\n').map(elf => elf.trim().split('\n').map(Number).reduce((a, b) => a + b)).sort((a, b) => a - b).slice(-3).reduce((a, b) => a + b))
