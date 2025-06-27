function sumFristAndLast(arr) {
    let numbers = arr.map(Number);
    
    let firstElement = numbers[0];
    let lastElement = numbers.pop();
    console.log(firstElement + lastElement);
    
}
sumFristAndLast(['20', '30', '40'])