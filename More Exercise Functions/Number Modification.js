function numberModification(number){

    number = number.toString().split('').map(Number)

    function getAverage(arr) {
        let sum = 0;
        for (let num of arr) {
            sum += num;
        }
        return sum / arr.length;
    }
    
    while (getAverage(number) < 5) {
        number.push(9);
    }
    
    console.log(number.join(''));
}
numberModification(101)