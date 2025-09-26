
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

i = 0

while i < len(numbers):
    del_num = int(input("what do you want do delete: "))
    numbers.pop(del_num)
    
print(numbers)