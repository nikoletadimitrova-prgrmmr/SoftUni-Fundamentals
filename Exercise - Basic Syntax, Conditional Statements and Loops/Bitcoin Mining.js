function bitcoinMining (input) {
     
        const bitcoinPrice = 11949.16;
        const goldPricePerGram = 67.51;
    
        let totalMoney = 0;
        let bitcoinsBought = 0;
        let dayOfFirstBitcoin = 0;
    
        for (let day = 0; day < input.length; day++) {
            let goldMined = input[day];
    

            if ((day + 1) % 3 === 0) {
                goldMined *= 0.70;
            }
    

            let moneyEarned = goldMined * goldPricePerGram;
            totalMoney += moneyEarned;
    

            while (totalMoney >= bitcoinPrice) {
                bitcoinsBought++;
                totalMoney -= bitcoinPrice;
    
                if (bitcoinsBought === 1) {
                    dayOfFirstBitcoin = day + 1;
                }
            }
        }
    
        console.log(`Bought bitcoins: ${bitcoinsBought}`);
        if (bitcoinsBought > 0) {
            console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
        }
        console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
    
    
}
bitcoinMining([100, 200, 300])