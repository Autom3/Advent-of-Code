const input = require('fs').readFileSync('input.txt', 'utf-8')

console.log(input.trim().split('\n').map(line => line.split('').map(item => item.toLowerCase() === item ? item.charCodeAt(0) - 'a'.charCodeAt(0) + 1 : item.charCodeAt(0) - 'A'.charCodeAt(0) + 27)).map(items => [items.slice(0, items.length / 2), items.slice(items.length / 2)].map(compartment => compartment.reduce((acc, item) => acc | (1n << BigInt(item)), 0n))).map(rucksack => (rucksack[0] & rucksack[1]).toString(2).length - 1).reduce((a, b) => a + b))

console.log(input.trim().split('\n').reduce((acc, line) => acc[acc.length - 1].length < 3 ? [...acc.slice(0, -1), [...acc[acc.length - 1], line]] : [...acc, [line]], [[]]).map(group => group.map(rucksack => rucksack.split('').map(item => item.toLowerCase() === item ? item.charCodeAt(0) - 'a'.charCodeAt(0) + 1 : item.charCodeAt(0) - 'A'.charCodeAt(0) + 27)).map(items => items.reduce((acc, item) => acc | (1n << BigInt(item)), 0n))).map(rucksack => (rucksack[0] & rucksack[1] & rucksack[2]).toString(2).length - 1).reduce((a, b) => a + b))