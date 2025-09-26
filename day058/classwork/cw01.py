def number(a,b):
    if a % 2 == 0:
        a = a // 2
    else:
        a = a + 1

    return a - b

print(number(10,24))
print(number(56,45))
#return არ გამოაქვს შედეგი ტერმინალში print გამოაქვს
