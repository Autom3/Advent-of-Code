const input = require('fs').readFileSync('input.txt', 'utf-8')

const parsed = input.trim().split('\n').map(line => line.split(' -> ').map(pair => pair.split(',').map(Number)))

const sandX = 500
const sandY = 0
const xs = parsed.flat().map(x => x[0])
const ys = parsed.flat().map(x => x[1])
const minY = Math.min(...ys, sandY)
const maxY = Math.max(...ys) + 2
const minX = Math.min(...xs, sandX - maxY)
const maxX = Math.max(...xs, sandX + maxY)

const grid = Array(maxY - minY + 1).fill().map(() => Array(maxX - minX + 1).fill('.'))

parsed.forEach(path => {
  let [xs, ys] = path[0]
  path.slice(1).forEach(([x, y]) => {
    const xIncr = Math.sign(x - xs)
    const yIncr = Math.sign(y - ys)
    for (let xi = 0; xi <= Math.abs(x - xs); xi++) {
      for (let yi = 0; yi <= Math.abs(y - ys); yi++) {
        grid[ys + yIncr * yi - minY][xs + xIncr * xi - minX] = '#'
      }
    }
    xs = x
    ys = y
  })
})

function dropSand () {
  while (true) {
    let x = sandX - minX
    let y = sandY - minY
    while (true) {
      if (y >= maxY - sandY || (x === sandX - minX && y === sandY - minY && grid[y][x] === 'o')) {
        return grid.reduce((acc, row) => acc + row.filter(x => x === 'o').length, 0)
      }
      if (grid[y + 1][x] === '.') {
        y++
        continue
      }
      if (grid[y + 1][x - 1] === '.') {
        x--
        y++
        continue
      }
      if (grid[y + 1][x + 1] === '.') {
        x++
        y++
        continue
      }
      grid[y][x] = 'o'
      break
    }
  }
}

console.log(dropSand())

grid.forEach((row, y) => row.forEach((pos, x) => {if (pos === 'o') grid[y][x] = '.'}))
grid.at(-1).forEach((_, x) => grid[grid.length - 1][x] = '#')

console.log(dropSand())

// console.log(grid.map(row => row.join('')).join('\n'))