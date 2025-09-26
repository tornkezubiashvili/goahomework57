import random


number = list(range(1, 31))


selected_number = 24


while True:
    user_guess = int(input("Please complete the number from 1 to 30: "))
    
   
    if user_guess < 1 or user_guess > 30:
        print("Incorrect, You must enter a number from 1 to 30: ")
    
    
    elif user_guess == selected_number:
        print("You guessed the number!: ")
        break
    
   
    else:
        print("Incorrect, Please try again: ")