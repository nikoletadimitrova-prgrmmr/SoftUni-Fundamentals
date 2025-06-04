function rounding (number, precision){
    if (precision > 15) {
        precision = 15;
    }

    let solve = number.toFixed(precision);

    let result = parseFloat(solve);
    
    console.log(result);

    //console.log(solve);
    
    
}
rounding(3.1415926535897932384626433832795, 2)
rounding(10.5, 3)