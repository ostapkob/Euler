ll = 1000
ls_5angle = [int(n*(3*n-1)/2) for n in range(1, ll)]

# print(ls_5angle)
flag = False
ls_sum =set()

for en, i in enumerate(ls_5angle):
    for j in ls_5angle[:en]:
        ls_sum.add(i+j)
        if
        # print(i, '-', j, '=', i-j, '\t', i , '+', j , '=', i+j)
        # if i-j in ls_5angle and i+j in ls_5angle:

            # print(i, j)
            # flag = True
            # break
    # if flag:
    #     break
print(sorted(ls_sum))
print('===============')
