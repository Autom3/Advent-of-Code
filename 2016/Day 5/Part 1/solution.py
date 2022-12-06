import hashlib

input = 'wtnhxymk'

def md5(s):
    return hashlib.md5(s.encode('utf-8')).hexdigest()

def find_zeroes(s, i):
    while md5(s + str(i))[:5] != '00000':
        i += 1
    return i

count = 0
password = ''
for i in range(8):
    count = find_zeroes(input, count)
    password += md5(input + str(count))[5]
    count += 1
    print(password)

print(password)