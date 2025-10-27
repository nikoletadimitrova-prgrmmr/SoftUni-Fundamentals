function armies(arr) {
    const leaders = new Map(); // лидер -> Map от армии

    for (let line of arr) {
        if (line.endsWith('arrives')) {
            // {leader} arrives
            const leader = line.replace(' arrives', '');
            if (!leaders.has(leader)) {
                leaders.set(leader, new Map()); // празна армия
            }
        } else if (line.includes(':')) {
            // {leader}: {army name}, {army count}
            const [leader, rest] = line.split(': ');
            if (leaders.has(leader)) {
                const [armyName, countStr] = rest.split(', ');
                const count = Number(countStr);
                leaders.get(leader).set(armyName, count);
            }
        } else if (line.includes('+')) {
            // {army name} + {army count}
            const [armyName, countStr] = line.split(' + ');
            const count = Number(countStr);
            for (let armyMap of leaders.values()) {
                if (armyMap.has(armyName)) {
                    armyMap.set(armyName, armyMap.get(armyName) + count);
                    break;
                }
            }
        } else if (line.endsWith('defeated')) {
            // {leader} defeated
            const leader = line.replace(' defeated', '');
            leaders.delete(leader);
        }
    }

    // Сортиране на лидерите по общ брой войници
    const sortedLeaders = [...leaders.entries()]
        .sort((a, b) => {
            const totalA = [...a[1].values()].reduce((sum, n) => sum + n, 0);
            const totalB = [...b[1].values()].reduce((sum, n) => sum + n, 0);
            return totalB - totalA;
        });

    for (let [leader, armyMap] of sortedLeaders) {
        const totalCount = [...armyMap.values()].reduce((sum, n) => sum + n, 0);
        console.log(`${leader}: ${totalCount}`);
        
        // Сортиране на армиите по брой
        const sortedArmies = [...armyMap.entries()]
            .sort((a, b) => b[1] - a[1]);

        for (let [army, count] of sortedArmies) {
            console.log(`>>> ${army} - ${count}`);
        }
    }
}
armies(['Rick Burr arrives', 'FergusWexamp, 30245', 
    'Rick Burr: Juard, 50000', 
    'Findlay arrives', 'Findlay: Britox, 34540', 
    'Wexamp + 6000', 
    'Juard + 1350', 
    'Britox + 4500',
    'Porter arrives', 
    'Porter: Legion, 55000', 
    'Legion + 302', 
    'Rick Burrdefeated', 
    'Porter: Retix, 3205'])