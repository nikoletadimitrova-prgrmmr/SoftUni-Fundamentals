function experienceGaining(arr) {
    let neededExperience = arr[0];
    let numberOfBattles = arr[1];

    let experienceThatThePlayerCanGain = arr.slice(2);
    let numberOfBattle = 0;

    let result = 0;

    for (let experience of experienceThatThePlayerCanGain) {
        numberOfBattle++;

        if (numberOfBattle % 3 === 0) {
            experience *= 1.15;
        } else if (numberOfBattle % 5 === 0) {
            experience *= 0.90;
        } else if (numberOfBattle % 15 === 0) {
            experience *= 1.05;
        }

        result += experience;

        if (result >= neededExperience) {
            console.log(`Player successfully collected his needed experience for ${numberOfBattle} battles.`);
            return;
        }
    }

    let moreneeded = (neededExperience - result).toFixed(2);
    console.log(`Player was not able to collect the needed experience, ${moreneeded} more needed.`);
}
experienceGaining(([500,
    5,
    50,
    100,
    200,
    100,
    30])
)