def multiply_and_check(num1, num2):
    product = num1 * num2
    if product % 2 == 0:
        print(f"ნამრავლი {product} არის ლუწი.")
    else:
        print(f"ნამრავლი {product} არის კენტი.")

multiply_and_check(3, 4)
multiply_and_check(5, 7)
multiply_and_check(6, 8)
multiply_and_check(9, 11)