numbers = [1, 2, 3, 4, 5]

reversed_numbers = []

index = len(numbers) - 1  

while index >= 0:
    reversed_numbers.append(numbers[index])
    index -= 1


print(reversed_numbers)