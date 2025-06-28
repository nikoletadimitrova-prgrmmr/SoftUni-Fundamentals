function sortAnArrayBy2Criteria(arr){
    let sortedArr = arr.sort();
    //console.log(sortedArr);
    function sortByalphabet(arr) {
        let alphabetSorted = sortedArr.sort((a, b) => a.length - b.length);
        console.log(alphabetSorted.join('\n'));
        
    }
    sortByalphabet()
}

sortAnArrayBy2Criteria(['alpha',

"gamma",

'beta'])