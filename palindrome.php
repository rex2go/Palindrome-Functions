<?php
function isPalindrome($word) {
    $word = strtolower($word);
    $reverse = strrev($word);
    return $word == $reverse;
}

/*
echo("John: " . (isPalindrome("John") ? "Palindrom" : "kein Palindrom") . "<br>");
echo("Hannah: " . (isPalindrome("Hannah") ? "Palindrom" : "kein Palindrom") . "<br>");
echo("Kiwik: " . (isPalindrome("Kiwik") ? "Palindrom" : "kein Palindrom") . "<br>");
*/
?>