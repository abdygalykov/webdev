# Enter your code here. Read input from STDIN. Print output to STDOUT
n = int(input())
english_set = set(map(int, input().split()))

m = int(input())
french_set = set(map(int, input().split()))

result_set = english_set.symmetric_difference(french_set)

print(len(result_set))