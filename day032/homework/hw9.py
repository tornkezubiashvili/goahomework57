products = {
    "Processor": 150,
    "Graphics Card": 300,
    "RAM": 100,
    "Power Supply": 80,
    "Case": 50
}

purchased_items = []

print("Welcome to PC Parts store!")
print("Available Products:")
for product, price in products.items():
    print(f"{product}: ${price}")

while True:
    item = input("\nPlease enter the product you want to buy (or type 'done' to finish): ").strip()
    if item.lower() == 'done':
        break 
    elif item in products:
        purchased_items.append(item)
        print(f"{item} has been added to your cart.")
    else:
        print("Sorry, we don't have that product. Please choose again.")

print("\n--- Your Receipt ---")
total_cost = 0
for item in purchased_items:
    price = products[item]
    total_cost += price
    print(f"{item}: ${price}")

print(f"\nTotal Cost: ${total_cost}")