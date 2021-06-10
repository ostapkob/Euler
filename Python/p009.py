import time

def is_trio(a, b, c):
    if a**2 + b**2 == c**2 and a < b and b < c:
        return True
    return False
start = time.time()
flag = False
for a in range(1, 1000):
    for b in range(a, 1000):
        for c in range(b, 1000):
            if is_trio(a, b, c) and a + b + c == 1000:
                print(a, b, c)
                flag = True
                break
        if flag:
            break
    if flag:
        break
print(time.time() - start)
