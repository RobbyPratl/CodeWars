#My solution for Kata IQ Test
def iq_test(numbers):
    count = 0
#Converts string of numbers seperated by spaces into list of ints, assigns them to list num
    num = numbers.split(' ')
    for i in range(0, len(num)):
        num[i] = int(num[i])
#adds 1 to count for value in list where % 2 = 0, subtracts 1 for value in list where % 2 != 0
    for i in num:
        if i % 2 == 0:
            count += 1
        else:
            count -= 1
# thus if the count is 1 or more, there are more numbers divisible by 2 in the list, if value is negative more numbers not divisible by 2 are in the list
#returns the index of the unlike number + 1
    if count >= 1:
        for i in num:
            if i % 2 != 0:
                return num.index(i) + 1
    else:
        for i in num:
            if i % 2 == 0:
                return num.index(i) + 1
