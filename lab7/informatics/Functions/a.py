def min4(a, b, c, d):
    res = a
    
    if b < res:
        res = b
    if c < res:
        res = c
    if d < res:
        res = d
        
    return res

input_data = list(map(int, input().split()))
a, b, c, d = input_data[0], input_data[1], input_data[2], input_data[3]

print(min4(a, b, c, d))