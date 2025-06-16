function dungeonestDark(str) {
    let health = 100;
    let coins = 0;

    let arr = str.split('|');


    for (let i = 0; i < arr.length; i++) {
        let [word, number] = arr[i].split(' ');
        number = Number(number);

        if (word === 'potion') {
            let healed = Math.min(100 - health, number);
            health += healed;
            //console.log(health);
               console.log(`You healed for ${healed} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (word === 'chest') {
            coins += number;
            console.log(`You found ${number} coins.`);
        } else {
            health -= number;

            if (health > 0) {
                console.log(`You slayed ${word}.`);
            } else {
                console.log(`You died! Killed by ${word}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            }
        }
    }

    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}
dungeonestDark("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");