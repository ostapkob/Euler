from math import factorial as fac
from itertools import permutations

def list_to_int(ls):
    rez = 0 #ls[-1]
    ls = ls[::-1]
    for en, i in enumerate(ls, 1):
        rez += i*10**en
    return rez //10

rez = list(permutations(range(1, 10), 9))
# print(rez)
amount = []
for i in rez:
    # a =list_to_int(i[:3])
    # b =list_to_int(i[3:5])
    # c = list_to_int(i[-4:])
    # if a*b==c:
    #     print(a, b, c)
    #     amount.add(c)
    a =list_to_int(i[:3])
    b =list_to_int(i[3:5])
    c = list_to_int(i[-4:])
    if a*b==c and c not in amount:
        amount.append(c)
        print(a, b, c)
# print(a, b, c)
print(sum(amount))

