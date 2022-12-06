f = open('input.txt', 'r')

def sector(line):
    d = {}
    b = 0
    check = []
    s_id = ''
    for c in line:
        if c == ']':
            b = 3
        elif b == 2:
            check.append(c)
        elif b == 1 and c == '[':
            b = 2
        elif c.isdigit():
            if b == 0:
                b = 1
            s_id += c
        elif c != '-' and b == 0:
            d[c] = d.get(c, 0) + 1

    check.reverse()
    drev = {}
    for k,v in d.items():
        l = drev.get(v, [])
        l.append(k)
        drev[v] = l

    for i in sorted(drev, reverse = True):
        for c in sorted(drev[i]):
            if len(check) > 0:
                if c != check.pop():
                    return 0
            if len(check) <= 0:
                return int(s_id)

s = 0

for line in f:
    s += sector(line)

print(s)