num = int(input("enter you num: "))

sum1 = 0
sum2 = 0
i = 0


while i < num:
    if i % 5 == 0:
        sum1 = sum1 + i
    elif i % 3 == 0:
        sum2 = sum2 + 1
    i = i + 1

print(sum1)
print(sum2)


