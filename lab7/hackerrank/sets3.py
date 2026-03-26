n = int(input())
english_set = set(map(int, input().split()))

m = int(input())
french_set = set(map(int, input().split()))

result_set = english_set.difference(french_set)

print(len(result_set))