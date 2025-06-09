function rightPlace (theWord, char, corectWord) {
    let check = theWord.replace('_', char);
    
    if (check === corectWord) {
        console.log('Matched');
        
    } else {
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'I',

'Strong')