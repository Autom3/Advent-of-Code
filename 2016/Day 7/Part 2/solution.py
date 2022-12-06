import re

f = open('input.txt', 'r')

p = re.compile(r'([a-zA-Z]+\[[^\]]*\])+')
aba = re.compile(r'([^\n\[\]])(?=[^\n\[\]]\1)')

def findSSL(line):
    for match in aba.finditer(line):
        l = line[:match.span()[0] + 3]
        a = match.group(1)
        b = line[match.span()[0] + 1]
        s = p.sub('', l)
        if a != b and s.find('[') < 0:
            bab = re.compile(r'\[[^\]]*' + b + a + b + '[^\]]*\]')
            if bab.search(line):
                return True
    return False

count = 0
for line in f:
    if findSSL(line):
        count += 1

print(count)