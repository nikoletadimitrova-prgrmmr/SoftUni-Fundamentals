function shootFotTheWin(arr) {
    let targets = arr.shift().split(' ').map(Number);
    let indexForShoot = arr.shift();
    let shotingCount = 0;

    while (indexForShoot !== "End") {
        let index = Number(indexForShoot);

        if (index >= 0 && index < targets.length && targets[index] !== -1) {
            let shotValue = targets[index];
            targets[index] = -1;
            shotingCount++;

            for (let i = 0; i < targets.length; i++) {
                if (targets[i] === -1) continue;

                if (targets[i] > shotValue) {
                    targets[i] -= shotValue;
                } else {
                    targets[i] += shotValue;
                }
            }
        }

        indexForShoot = arr.shift();
    }

    console.log(`Shot targets: ${shotingCount} -> ${targets.join(' ')}`);
}
shootFotTheWin(["24 50 36 70",

    "0",

    "4",

    "3",

    "1",

    "End"])