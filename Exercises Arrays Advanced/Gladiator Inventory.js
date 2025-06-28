function gladiatorInventory(arr){
    let inventory = arr.shift().split(' ');

    for (let commandLine of arr) {
        let [command, item] = commandLine.split(' ');

        if (command === 'Buy') {

            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        } else if (command === 'Trash') {
            inventory = inventory.filter(x => x !== item);
        } else if (command === 'Repair') {

            let index = inventory.indexOf(item);
            if (index !== -1) {
                inventory.splice(index, 1);
                inventory.push(item);
            }
        } else if (command === 'Upgrade') {
            let [equipment, upgrade] = item.split('-');
            let index = inventory.indexOf(equipment);
            if (index !== -1) {
                inventory.splice(index + 1, 0, `${equipment}:${upgrade}`);
            }
        }
    }

    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',

'Buy Bag',

'Trash Shield',

'Repair Spear',

'Upgrade SWORD-Steel'])