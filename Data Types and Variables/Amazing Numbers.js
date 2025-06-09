function amazingNumbers (num) {
    let sum = 0;
    
    num = num.toString();
    let digits = [];

    for (let i = 0; i < num.length; i++) {
         
         sum += Number(num[i]);
         
    }

    if(sum.toString().includes('9')) {
            console.log(`${num} Amazing? True`);
            
         } else {
            console.log(`${num} Amazing? False`);
         }
    
}
amazingNumbers(1233)