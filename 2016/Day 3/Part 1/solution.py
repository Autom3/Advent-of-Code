f = open('input.txt', 'r')

counter = 0
for line in f:
    l = list(map(int, line.split()))
    l.sort()
    a, b, c = l
    if a + b > c:
        counter += 1
print(counter)
