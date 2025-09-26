numbers_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

num_list = []

for i in range(len(numbers_list)):
    if numbers_list[i] % 2 == 0:
        num_list.append(numbers_list[i])
       

print(num_list)
