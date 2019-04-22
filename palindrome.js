function isPalindrome(word) {
    word = word.toLowerCase();
    var reverse = word.split("").reverse().join("");
    return word == reverse;
}

/*
console.log(isPalindrome("John")); // false
console.log(isPalindrome("Hannah")); // true
console.log(isPalindrome("Kiwik")); // true
*/