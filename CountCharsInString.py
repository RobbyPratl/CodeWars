def count(string):
#initalize dictonary
    dict = {}
# count each value in dictonary
    for char in string:
        dict[char] = string.count(char)
    return dict
#conditonal for blank string 
    if string == 0:
        return {}
