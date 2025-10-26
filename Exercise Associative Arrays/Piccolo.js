function picolo(str) {
    let parking = new Set();

    let cars = {};

    for (let car of str) {
        [command, number] = car.split(', ');
        //console.log(number);

        if (command === 'IN') {
            parking.add(number);
        } else {
            parking.delete(number)
        }
    }

    let sortedCars = Array.from(parking).sort();

        if (sortedCars.length === 0) {
            console.log("Parking Lot is Empty");
        } else {
            for (let car of sortedCars) {
                console.log(car);
            }
        }
}
picolo(['IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'IN, CA9999TT',

    'IN, CA2866HI',

    'OUT, CA1234TA',

    'IN, CA2844AA',

    'OUT, CA2866HI',

    'IN, CA9876HH',

    'IN, CA2822UU'])