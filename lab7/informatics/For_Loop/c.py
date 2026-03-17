import math

a = int(input())
b = int(input())

s = math.ceil(math.sqrt(max(0, a)))
e = int(math.sqrt(b))

for i in range(s, e + 1):
    print(i * i, end=" ")