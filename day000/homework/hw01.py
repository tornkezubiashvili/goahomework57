from turtle import*


#we want to pint a house

speed(30)
#stem 1:  drow a squard
width(7)
color("purple")
forward(200)
left(90)

forward(200)
left(90)
forward(200)
left(90)

forward(200)
left(90)

#end of spuare

#drawing a door

forward(70)
color("yellow")
begin_fill()
left(90)
forward(120) #hight of the door
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200,200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

#driwing window
color("blue")
begin_fill()
left(30)
forward(70)
left(90)
forward(50)
left(90)
forward(70)
left(90)
forward(50)
right(180)
forward(200)
right(90)
forward(70)
right(90)
forward(50)
right(90)
forward(70)
end_fill()
exitonclick()