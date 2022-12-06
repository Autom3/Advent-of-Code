f = open('input.txt', 'r')

def incr(d, c):
    d[c] = d.get(c, 0) + 1

letters = []

for line in f:
    if line[-1] == '\n':
        l = line[:-1]
    else:
        l = line

    if len(letters) == 0:
        for c in l:
            letters.append({c: 1})
    else:
        for i in range(len(l)):
            incr(letters[i], l[i])

output = ''
for d in letters:
    output += max(d, key=d.get)

print(output)