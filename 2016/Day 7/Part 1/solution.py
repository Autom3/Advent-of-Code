import re

f = open('input.txt', 'r')

abba = re.compile(r'([^\]])([^\]])\2\1')
hyper = re.compile(r'\[[^\]]*([^\]])([^\]])\2\1[^\]]*\]')

def findABBA(line):
    for match in abba.finditer(line):
        if match.group(1) != match.group(2) and hyper.search(line) == None:
            return True
    return False

count = 0
for line in f:
    if findABBA(line):
        count += 1

print(count)