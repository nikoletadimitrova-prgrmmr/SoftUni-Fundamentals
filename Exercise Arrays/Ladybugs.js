function ladybugs(arr) {
    let length = arr[0];

    let startArr = arr[1].split(' ').map(Number);
    //console.log(startArr);

    let initialField = new Array(length).fill(0);

    for (let i = 0; i < startArr.length; i++) {
        let index = startArr[i]
        if (index >= 0 && index < length) {
            initialField[index] = 1;
        }

    }

    //console.log(initialField);


    for (let i = 2; i < arr.length; i++) {
        let [startIndexStr, direction, stepStr] = arr[i].split(' ');
        let startIndex = Number(startIndexStr);
        let step = Number(stepStr);

        if (initialField[startIndex] !== 1) {
            continue;
        }

        initialField[startIndex] = 0;

        let position = startIndex;

        while (true) {
            if (direction === 'right') {
                position += step;
            } else {
                position -= step;
            }

            if (position < 0 || position >= length) {
                break;
            }

            if (initialField[position] === 0) {
                initialField[position] = 1;
                break;
            }

        }
    }

    console.log(initialField.join(' '));


}
ladybugs([3, '0 1',

    '0 right 1',

    '2 right 1']);