def count_evens(nums):
    count = 0
    for num in nums:
        if num % 2 == 0:
            count += 1
    return count

def big_diff(nums):
    if not nums:
        return 0
    max_num = max(nums)
    min_num = min(nums)
    return max_num - min_num

def centered_average(nums):
    if len(nums) < 3:
        return 0
    sorted_nums = sorted(nums)
    centered_nums = sorted_nums[1:-1]
    return sum(centered_nums) // len(centered_nums)

def sum13(nums):
    total = 0
    skip_next = False
    for num in nums:
        if num == 13:
            skip_next = True
        elif skip_next:
            skip_next = False
        else:
            total += num
    return total

def sum67(nums):
    total = 0
    in_section = False
    for num in nums:
        if num == 6:
            in_section = True
        elif num == 7 and in_section:
            in_section = False
        elif not in_section:
            total += num
    return total

def has22(nums):
    for i in range(len(nums) - 1):
        if nums[i] == 2 and nums[i+1] == 2:
            return True
    return False