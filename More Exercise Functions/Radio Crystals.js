function radioCrystal(arr) {
    let target = arr[0];
    let crystals = arr.slice(1);

    for (let crystal of crystals) {
        console.log(`Processing chunk ${crystal} microns`);

        // CUT
        let countCut = 0;
        while (crystal / 4 >= target) {
            crystal /= 4;
            countCut++;
        }
        if (countCut > 0) {
            console.log(`Cut x${countCut}`);
            console.log('Transporting and washing');
            crystal = Math.floor(crystal);
        }

        // LAP
        let countLap = 0;
        while (crystal * 0.8 >= target) {
            crystal *= 0.8;
            countLap++;
        }
        if (countLap > 0) {
            console.log(`Lap x${countLap}`);
            console.log('Transporting and washing');
            crystal = Math.floor(crystal);
        }

        // GRIND
        let countGrind = 0;
        while (crystal - 20 >= target) {
            crystal -= 20;
            countGrind++;
        }
        if (countGrind > 0) {
            console.log(`Grind x${countGrind}`);
            console.log('Transporting and washing');
            crystal = Math.floor(crystal);
        }

        // ETCH
        let countEtch = 0;
        while (crystal - 2 >= target - 1) { 
            crystal -= 2;
            countEtch++;
        }
        if (countEtch > 0) {
            console.log(`Etch x${countEtch}`);
            console.log('Transporting and washing');
            crystal = Math.floor(crystal);
        }

        // X-RAY 
        if (crystal === target - 1) {
            crystal += 1;
            console.log("X-ray x1");
        }

        // FINAL
        console.log(`Finished crystal ${target} microns`);
    }
}

radioCrystal([1000, 4000, 8100])
radioCrystal([1375, 50000])