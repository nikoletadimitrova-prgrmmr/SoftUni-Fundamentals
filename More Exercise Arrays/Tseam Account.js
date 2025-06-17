function tseamAccount(arr) {
    let theGames = arr[0].split(' ');
    let i = 1;
    let commands= arr[i];

    while (commands !== 'Play!') {
        let [command, gameInfo] = commands.split(' ');

        if (command === 'Install') {
            if (!theGames.includes(gameInfo)) {
                theGames.push(gameInfo);
            }

        } else if (command === 'Uninstall') {
            theGames = theGames.filter(game => game !== gameInfo);

        } else if (command === 'Update') {
            if (theGames.includes(gameInfo)) {
                theGames = theGames.filter(game => game !== gameInfo);
                theGames.push(gameInfo);
            }

        } else if (command === 'Expansion') {
            let [game, expansion] = gameInfo.split('-');
            let index = theGames.indexOf(game);
            if (index !== -1) {
                theGames.splice(index + 1, 0, `${game}:${expansion}`);
            }
        }

        i++;
        commands = arr[i];
    }

    console.log(theGames.join(' '));
}
tseamAccount(['CS WoW Diablo',

    'Install LoL',

    'Uninstall WoW',

    'Update Diablo',

    'Expansion CS-Go',

    'Play!'])