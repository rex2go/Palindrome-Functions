function isPalindrome(word) {
    word = word.toLowerCase();
    var reverse = word.split("").reverse().join("");
    return word == reverse;
}