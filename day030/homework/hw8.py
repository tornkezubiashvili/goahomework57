
shopping_list = []


while True:
    
    print("რას შეიძენთ")
    print("1. შარვალი")
    print("2. წაშლა")
    print("3. გამოსვლა")
    
    choice = input("შეიყვანეთ მოქმედების ნომერი (1/2/3): ")
    
    if choice == '1': 
        product = input("შეიყვანეთ პროდუქტის სახელი, რომელიც გსურთ დაამატოთ: ")
        shopping_list.append(product)
        print("პროდუქტი '{product}' დაემატა სიაში.")
        
    elif choice == '2': 
        if shopping_list:
            print("ამჟამად თქვენი შოპინგ სია:", shopping_list)
            product = input("შეიყვანეთ პროდუქტის სახელი, რომელიც გსურთ წაშალოთ: ")
            if product in shopping_list:
                shopping_list.remove(product)
                print(f"პროდუქტი '{product}' წარმატებით წაიშალა.")
            else:
                print(f"პროდუქტი '{product}' არ არსებობს სიაში.")
        else:
            print("თქვენი შოპინგ სია ცარიელია.")
    
    elif choice == '3':
        print("\nშოპინგი დასრულდა!")
        print("თქვენ შეიძინეთ:", shopping_list)
        break 
        print("არასწორი არჩევანი, გთხოვთ აირჩიოთ სწორი ფუნქცია.")
