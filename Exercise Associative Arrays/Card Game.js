function cardGame(arr) {
    let players = new Map();

    for (let line of arr) {
        let [name, cardsStr] = line.split(': ');
        let cards = cardsStr.split(', ');

        if (!players.has(name)) {
            players.set(name, new Set());
        }

        for (let card of cards) {
            players.get(name).add(card);
        }
    }

    let powerValues = {
        '2': 2, '3': 3, '4': 4, '5': 5,
        '6': 6, '7': 7, '8': 8, '9': 9,
        '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14
    };
    
    let typeValues = {'S': 4, 'H': 3, 'D': 2, 'C': 1};

    for (let [name, cards] of players) {
        let totalValue = 0;

        for (let card of cards) {
            let type = card.slice(-1);
            let power = card.slice(0, card.length - 1);

            totalValue += powerValues[power] * typeValues[type];
        }

        console.log(`${name}: ${totalValue}`);
    }
}
cardGame([

'Peter: 2C, 4H, 9H, AS, QS',

'Tomas: 3H, 10S, JC, KD, 5S, 10S',

'Andrea: QH, QC, QS, QD',

'Tomas: 6H, 7S, KC, KD, 5S, 10C',

'Andrea: QH, QC, JS, JD, JC',

'Peter: JD, JD, JD, JD, JD, JD'

])