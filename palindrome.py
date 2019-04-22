def is_palindrome(word):
    word = word.lower()
    reverse = word[::-1]
    return word == reverse