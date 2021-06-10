#!/usr/bin/env python
# -*- coding: utf-8 -*-
from time import time


def fib(n):
    x = 0  # Represents the current Fibonacci number being processed
    y = 1  # Represents the next Fibonacci number in the sequence
    for _ in range(n):
        x, y = y, x+y
    return y


start = time()
lsFib = (fib(x) for x in range(10000))

total = 0
for i in lsFib:
    if (i % 2 == 0):
        total += i

print(total)
print(time() - start)
