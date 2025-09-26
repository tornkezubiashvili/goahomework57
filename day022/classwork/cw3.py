num =  int(input("Enter you num: "))

sum = 0 
sum1 = 0

for i in range(num):
    if i % 2 ==0:
         sum += i
    if i % 2 !=0:
         sum1 += i
    
    
print(sum) 
print(sum1)  