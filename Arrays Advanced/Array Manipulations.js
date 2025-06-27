function arrayManipulatoins(arr) {
    let array = arr.shift().split(' ').map(Number);

    for (let i = 0; i < arr.length; i++) {
        let parts = arr[i].split(' ');
        let command = parts[0];

        if (command === 'Add') {
            let number = Number(parts[1]);
            array.push(number);
        } else if (command === 'Remove') {
            let number = Number(parts[1]);
            array = array.filter(num => num !== number);
        } else if (command === 'RemoveAt') {
            let index = Number(parts[1]);
            array.splice(index, 1);
        } else if (command === 'Insert') {
            let number = Number(parts[1]);
            let index = Number(parts[2]);
            array.splice(index, 0, number);
        }
    }

    console.log(array.join(' '));

}
arrayManipulatoins(['4 19 2 53 6 43',

    'Add 3',

    'Remove 2',

    'RemoveAt 1',

    'Insert 8 3']);