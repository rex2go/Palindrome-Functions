function isPalindrome(word: string): boolean {
    word = word.toLowerCase();
    const reverse: string = word.split("").reverse().join("");
    return word == reverse;
}

/*
console.log(isPalindrome("John")); // false
console.log(isPalindrome("Hannah")); // true
console.log(isPalindrome("Kiwik")); // true
*/
