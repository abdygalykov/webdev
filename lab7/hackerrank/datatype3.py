if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    
    unique_scores = set(arr)
    
    sorted_scores = sorted(list(unique_scores))
    
    print(sorted_scores[-2])