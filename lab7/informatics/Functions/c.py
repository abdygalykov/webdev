def xor(x, y):
    if x != y:
        return 1
    else:
        return 0

input_data = input().split()
x = int(input_data[0])
y = int(input_data[1])

print(xor(x, y))