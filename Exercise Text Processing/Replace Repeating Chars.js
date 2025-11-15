function replaceRepeatingChars(str) {
    return str.replace(/(.)\1+/g, '$1');
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')