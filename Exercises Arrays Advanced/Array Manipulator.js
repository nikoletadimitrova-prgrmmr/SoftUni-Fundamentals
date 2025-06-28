function arrayManipulator(arr, commands){
    for (let i = 0; i < commands.length; i++) {
        let parts = commands[i].split(' ');
        let command = parts[0];

        if (command === 'add') {
            let index = Number(parts[1]);
            let element = Number(parts[2]);
            arr.splice(index, 0, element);
        } else if (command === 'addMany') {
            let index = Number(parts[1]);
            let elementsToAdd = [];
            for (let j = 2; j < parts.length; j++) {
                elementsToAdd.push(Number(parts[j]));
            }

            arr.splice(index, 0, ...elementsToAdd);

        } else if (command === 'contains') {
            let element = Number(parts[1]);
            console.log(arr.indexOf(element));
        } else if (command === 'remove') {
            let index = Number(parts[1]);
            arr.splice(index, 1);
        } else if (command === 'shift') {
            let positions = Number(parts[1]) % arr.length;
            for (let j = 0; j < positions; j++) {
                arr.push(arr.shift());
            }
        } else if (command === 'sumPairs') {
            let newArray = [];
            for (let j = 0; j < arr.length; j += 2) {
                let first = arr[j];
                let second = (j + 1 < arr.length) ? arr[j + 1] : 0;
                newArray.push(first + second);
            }
            arr = newArray;
        } else if (command === 'print') {
            console.log(`[ ${arr.join(', ')} ]`);
            return;
        }
    }
}
arrayManipulator([1, 2, 4, 5, 6, 7],

['add 1 8', 'contains 1', 'contains 3', 'print'])