function smallestTwoNumbers(arr){
    for(let i = 0; i < arr.length; i++) {
        let result = arr.sort((a, b) => a - b);
        return result.slice(0, 2).join(' ');
        
    }
    
}
let final = smallestTwoNumbers([30, 15, 50, 5]);
console.log(final.slice(0, 2).join(' '));
