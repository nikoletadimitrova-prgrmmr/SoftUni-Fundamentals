function stringSubstring(word, text) {
    let lowerWord = word.toLowerCase();
    let words = text.toLowerCase().split(' ');

    if (words.includes(lowerWord)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}
stringSubstring('javascript',

    'JavaScript is the best programming language')