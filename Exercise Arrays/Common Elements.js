function commonElements(arr1, arr2) {
    let same = arr1.filter(x => arr2.includes(x));
    console.log(same.join('\n'));
    
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],

['Petar', 10, 'hey', 4, 'hello', '2']);