import sys

#puzzle_input = 'R8, L4, L4, L8'
puzzle_input = 'R5, R4, R2, L3, R1, R1, L4, L5, R3, L1, L1, R4, L2, R1, R4, R4, L2, L2, R4, L4, R1, R3, L3, L1, L2, R1, R5, L5, L1, L1, R3, R5, L1, R4, L5, R5, R1, L185, R4, L1, R51, R3, L2, R78, R1, L4, R188, R1, L5, R5, R2, R3, L5, R3, R4, L1, R2, R2, L4, L4, L5, R5, R4, L4, R2, L5, R2, L1, L4, R4, L4, R2, L3, L4, R2, L3, R3, R2, L2, L3, R4, R3, R1, L4, L2, L5, R4, R4, L1, R1, L5, L1, R3, R1, L2, R1, R1, R3, L4, L1, L3, R2, R4, R2, L2, R1, L5, R3, L3, R3, L1, R4, L3, L3, R4, L2, L1, L3, R2, R3, L2, L1, R4, L3, L5, L2, L4, R1, L4, L4, R3, R5, L4, L1, L1, R4, L2, R5, R1, R1, R2, R1, R5, L1, L3, L5, R2'
x = 0
y = 0
direction = 0

def cmp(a, b):
    if a < b:
        return 1
    else:
        return -1

def add(d, x, y):
    if x not in d:
        d[x] = [y]
    else:
        if y in d[x]:
            return
        else:
            d[x].append(y)
    return d

prev_pos = add({}, 0, 0)

for p in puzzle_input.split(', '):
    d = p[0]
    n = int(p[1:])
    if d == 'R':
        direction += 1
    else:
        direction -= 1
    direction = direction % 4
    old_x = x
    old_y = y
    if direction == 0:
        x += n
        old_x += 1
    if direction == 1:
        y += n
        old_y += 1
    if direction == 2:
        x -= n
        old_x -= 1
    if direction == 3:
        y -= n
        old_y -= 1
    for i in range(old_x, x + cmp(old_x, x), cmp(old_x, x)):
        for j in range(old_y, y + cmp(old_y, y), cmp(old_y, y)):
            temp = add(prev_pos, i, j)
            if temp == None:
                print(abs(i) + abs(j))
                sys.exit()
            else:
                prev_pos = temp

print(prev_pos)
