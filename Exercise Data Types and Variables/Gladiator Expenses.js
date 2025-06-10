function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    
    let brokenHelmets = parseInt(lostFightsCount / 2);
    let brokenSwords = parseInt(lostFightsCount / 3);
    let brokenShields = parseInt(lostFightsCount / 6);
    let brokenArmor = parseInt(brokenShields / 2);

    let total = brokenHelmets * helmetPrice + brokenSwords * swordPrice + brokenShields * shieldPrice + brokenArmor * armorPrice;
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}
gladiatorExpenses(7,

2,

3,

4,

5)