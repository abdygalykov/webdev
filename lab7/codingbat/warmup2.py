def string_times(str, n):
    return str * n

def front_times(str, n):
    front = str[:3]
    return front * n

def string_bits(str):
    return str[::2]

def string_splosion(str):
    result = ''
    for i in range(len(str)):
        result += str[:i+1]
    return result

def last2(str):
    if len(str) < 2:
        return 0
    last2 = str[-2:]
    count = 0
    for i in range(len(str) - 2):
        if str[i:i+2] == last2:
            count += 1
    return count

def array_count9(nums):
    count = 0
    for num in nums:
        if num == 9:
            count += 1
    return count

def array_front9(nums):
    end = min(4, len(nums))
    for i in range(end):
        if nums[i] == 9:
            return True
    return False

def array123(nums):
    for i in range(len(nums) - 2):
        if nums[i] == 1 and nums[i+1] == 2 and nums[i+2] == 3:
            return True
    return False

def string_match(a, b):
    count = 0
    for i in range(min(len(a), len(b)) - 1):
        if a[i:i+2] == b[i:i+2]:
            count += 1
    return count