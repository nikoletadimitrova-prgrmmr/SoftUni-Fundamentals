function listOFproducts(arr){
    let sorted = arr.sort();
    //console.log(sorted);

    for(let i = 0; i < sorted.length; i++){
        console.log(`${i + 1}.${sorted[i]}`);
    }
    
}
listOFproducts(['Potatoes', 'Tomatoes', 'Onions',

'Apples'])