<?php
function isPalindrome($word) {
    $word = strtolower($word);
    $reverse = strrev($word);
    return $word == $reverse;
}
?>