number_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]


sun_fir_even_numbers = 0

for i in range(len(number_list)):
    if number_list[i] % 2 == 0:
        sun_fir_even_numbers += number_list[i]

print(sun_fir_even_numbers)        