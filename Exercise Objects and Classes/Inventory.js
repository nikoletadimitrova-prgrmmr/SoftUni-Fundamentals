function inventory(arr) {
    let herors = [];
    for (let i = 0; i < arr.length; i++) {
        let [name, level, items] = arr[i].split('/');
        level = Number(level);

        // let sorted = arr.sort((a, b) => {
        //     let levelA = Number(a.split('/')[1]);
        //     let levelB = Number(b.split('/')[1]);

        //     return levelA - levelB;
        // })

        //console.log(sorted);

        let hero = {
            name: name,
            level: level,
            items: items
        }

        herors.push(hero)

        herors.sort((a, b) =>
            a.level - b.level)

    }

    for (let hero of herors) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items =>${hero.items}`);


    }
}
inventory([

    'Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'

])