def is_palindrome(word):
    word = word.lower()
    reverse = word[::-1]
    return word == reverse

'''
inp = input("Wort eingeben: ")

if is_palindrome(inp):
    print("\"" + inp + "\" ist ein Palindrom")
else:
    print("\"" + inp + "\" ist kein Palindrom")
'''