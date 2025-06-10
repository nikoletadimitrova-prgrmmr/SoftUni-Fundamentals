function asciiValuesOfReversedCharacters(charOne, charTwo, charThree) {
    let chars = [charOne, charTwo, charThree];
    let reverse = chars.reverse().join('');
    console.log(reverse);

    console.log(charThree.charCodeAt(0), charTwo.charCodeAt(0), charOne.charCodeAt(0));
}
asciiValuesOfReversedCharacters('a',
    'b',
    'c')