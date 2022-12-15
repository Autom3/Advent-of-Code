const input = require('fs').readFileSync('input.txt', 'utf-8')

function comparePackets (l, r) {
  if (l === undefined) {
    if (r === undefined) {
      return 0
    }
    return -1
  }
  if (r === undefined) {
    return 1
  }
  if (l instanceof Array && r instanceof Array) {
    for (let i = 0; i < Math.max(l.length, r.length); i++) {
      const out = comparePackets(l[i], r[i])
      if (out !== 0) {
        return out
      }
    }
    return 0
  }
  if (l instanceof Array || r instanceof Array) {
    return comparePackets(l instanceof Array ? l : [l], r instanceof Array ? r : [r])
  }
  return Math.sign(l - r)
}

const parsedInput = input.trim().split('\n\n').map(lines => lines.split('\n').map(s => JSON.parse(s)))
console.log(parsedInput.reduce((acc, [l, r], i) => acc + (comparePackets(l, r) === -1 ? i + 1 : 0), 0))
const decoders = [[[2]], [[6]]]
console.log([...parsedInput.flat(), ...decoders].sort(comparePackets).reduce((acc, x, i) => acc * (decoders.indexOf(x) < 0 ? 1 : (i + 1)), 1))