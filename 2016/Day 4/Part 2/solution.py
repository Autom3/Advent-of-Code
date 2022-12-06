f = open('input.txt', 'r')

def shift(c, i):
    if c == '-':
        return ' '
    return chr((ord(c) + i - ord('a')) % 26 + ord('a'))

for line in f:
    s = ''
    b = 0
    s_id = ''
    for c in line:
        if c == ']':
            b = 3
        elif b == 1 and c == '[':
            b = 2
        elif c.isdigit():
            if b == 0:
                b = 1
            s_id += c
        elif b == 0:
            s += c

    s_id = int(s_id)
    s_shift = ''
    for c in s:
        s_shift += shift(c, s_id)

    if s_shift.find('northpole') >= 0:
        print(s_id)