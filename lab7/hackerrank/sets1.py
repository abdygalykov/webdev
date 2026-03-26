# Enter your code here. Read input from STDIN. Print output to STDOUT
n = int(input())

countries = set()

for _ in range(n):
    country_name = input().strip()
    countries.add(country_name)

print(len(countries))