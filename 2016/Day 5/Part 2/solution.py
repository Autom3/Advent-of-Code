import hashlib

input = 'wtnhxymk'

def md5(s):
    return hashlib.md5(s.encode('utf-8')).hexdigest()

def find_zeroes(s, i):
    while md5(s + str(i))[:5] != '00000':
        i += 1
    return i

def incomplete(l):
    for x in l:
        if x == None:
            return True
    return False

count = 0
password = [None, None, None, None, None, None, None, None]
while incomplete(password):
    count = find_zeroes(input, count)
    hash = md5(input + str(count))
    if hash[5].isdigit() and int(hash[5]) < 8 and password[int(hash[5])] == None:
        password[int(hash[5])] = hash[6]
        print(password)
    count += 1

print(''.join(password))