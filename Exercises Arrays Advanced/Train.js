function train(arr){
    let wagons = arr.shift().split(' ').map(Number);

    let maxCapacity = Number(arr.shift());

    for (let command of arr) {
        let parts = command.split(' ');

        if (parts[0] === 'Add') {

            let passengersToAdd = Number(parts[1]);
            wagons.push(passengersToAdd);
        } else {
            let passengersToFit = Number(parts[0]);

            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + passengersToFit <= maxCapacity) {
                    wagons[i] += passengersToFit;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));

}
train(['32 54 21 12 4 0 23',

'75',

'Add 10',

'Add 0',

'30',

'10',

'75'])