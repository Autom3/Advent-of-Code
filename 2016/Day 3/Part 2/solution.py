f = open('input.txt', 'r')

running = True
counter = 0
triangles = []
while running:
    for i in range(0, 3):
        line = f.readline()
        if line == '':
            running = False
        else:
            triangles.append(list(map(int, line.split())))
    if running:
        for i in range(0, 3):
            l = [triangles[0][i], triangles[1][i], triangles[2][i]]
            l.sort()
            if l[0] + l[1] > l[2]:
                counter += 1
        triangles.clear()
print(counter)
