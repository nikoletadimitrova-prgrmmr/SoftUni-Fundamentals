function storage(arr) {
    let map = new Map();

    for(let el of arr){
        [product, quantiy] = el.split(' ');
        //console.log(product);
        
        if(!map.has(product)) {
            map.set(product, quantiy);
        } else {
            let curQuantity = Number(map.get(product));
            let newQuantity = curQuantity + Number(quantiy);
            map.set(product, newQuantity);
        }
    }

    for(let [product, quantiy] of map) {
        console.log(`${product} -> ${quantiy}`);
    }    
    
}
storage(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40'])