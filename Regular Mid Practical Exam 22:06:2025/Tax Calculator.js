function taxCalculator(arr) {
    let array = arr[0];
    let cars = array.split('>>');
    ///console.log(cars);

    let taxToPay = 0;
    let taxTocollect = 0;

    for (let vechicles of cars) {
        let [typeOfCar, year, kilometers] = vechicles.split(' ');
        //console.log(typeOfCar);

        switch (typeOfCar) {
            case 'family':
                taxToPay = 50 + (year * (-5)) + (Math.floor(kilometers / 3000) * 12);
                console.log(`A ${typeOfCar} car will pay ${taxToPay.toFixed(2)} euros in taxes.`);
                break;

            case 'heavyDuty':
                taxToPay = 80 + (year * (-8)) + (Math.floor(kilometers / 9000) * 14);
                console.log(`A ${typeOfCar} car will pay ${taxToPay.toFixed(2)} euros in taxes.`);
                break;

            case 'sports':
                taxToPay = 100 + (year * (-9)) + (Math.floor(kilometers / 2000) * 18);
                console.log(`A ${typeOfCar} car will pay ${taxToPay.toFixed(2)} euros in taxes.`);
                break;

            default:
                console.log('Invalid car type.');
                taxToPay = 0;
                break;
        }

        taxTocollect += taxToPay;
    }
        console.log(`The National Revenue Agency will collect ${taxTocollect.toFixed(2)} euros in taxes.`);


}
taxCalculator((['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']))