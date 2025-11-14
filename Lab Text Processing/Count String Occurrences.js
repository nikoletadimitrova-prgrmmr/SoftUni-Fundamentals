function countStringOccurrences(sentence, word) {
    let words = sentence.split(' ');
    let counter = 0;

    for(let w of words) {
        if(w === word) {
            counter ++;
        }
    }

    console.log(counter);
    
}
countStringOccurrences('This is a word and it also is a sentence',

'is')