function airPollution(mapData, forces) {

    let map = mapData.map(row => row.split(' ').map(Number));


    for (let force of forces) {
        let [command, value] = force.split(' ');
        value = Number(value);

        if (command === "breeze") {

            for (let col = 0; col < 5; col++) {
                map[value][col] = Math.max(0, map[value][col] - 15);
            }
        } else if (command === "gale") {

            for (let row = 0; row < 5; row++) {
                map[row][value] = Math.max(0, map[row][value] - 20);
            }
        } else if (command === "smog") {

            for (let row = 0; row < 5; row++) {
                for (let col = 0; col < 5; col++) {
                    map[row][col] += value;
                }
            }
        }
    }

    let polluted = [];
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if (map[row][col] >= 50) {
                polluted.push(`[${row}-${col}]`);
            }
        }
    }

    if (polluted.length > 0) {
        console.log(`Polluted areas: ${polluted.join(', ')}`);
    } else {
        console.log("No polluted areas");
    }
}
airPollution(['5 7 72 14 4',

'41 35 37 27 33',

'23 16 27 42 12',

'2 20 28 39 14',

'16 34 31 10 24'],

['breeze 1', 'gale 2', 'smog 25'])