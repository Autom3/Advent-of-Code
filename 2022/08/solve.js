const input = require('fs').readFileSync('input.txt', 'utf-8')

console.log((grid => grid.flatMap((row, x) => row.filter((tree, y) => [row.slice(0, y), row.slice(y + 1), grid.map(row => row[y]).slice(0, x), grid.map(row => row[y]).slice(x + 1)].some(dir => tree > Math.max(...dir)))).length)(input.trim().split('\n').map(line => line.split('').map(Number))))

console.log((grid => Math.max(...grid.flatMap((row, x) => row.map((tree, y) => [row.slice(0, y).reverse(), row.slice(y + 1), grid.map(row => row[y]).slice(0, x).reverse(), grid.map(row => row[y]).slice(x + 1)].reduce((acc, dir) => acc * (n => n < 0 ? dir.length : n + 1)(dir.findIndex(t => tree <= t)), 1)))))(input.trim().split('\n').map(line => line.split('').map(Number))))