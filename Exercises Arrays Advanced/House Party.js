function houseParty(arr){
    let result = [];

    for (let command of arr) {
        let parts = command.split(' ');
        
        let name = parts[0];

        if (command.includes("is going")) {
            if (result.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                result.push(name);
            }
        } else if (command.includes("is not going")) {
            if (!result.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                result = result.filter(guest => guest !== name);
            }
        }
    }

    console.log(result.join('\n'))
}
houseParty(['Allie is going!',

'George is going!',

'John is not going!',

'George is not going!'])