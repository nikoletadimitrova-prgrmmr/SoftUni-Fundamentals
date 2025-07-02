function phoneShop(arr) {
    let listOfPhones = arr.shift().split(', ');
    //console.log(listOfPhones);

    let result = [];

    for (let commands of arr) {
        let [command, modelPhone] = commands.split(' - ');
        //console.log(command);

        if (command === 'End') {
            break;
        }

        switch (command) {
            case 'Add':
                if (!listOfPhones.includes(modelPhone)) {
                    listOfPhones.push(modelPhone);
                }
                break;

            case 'Remove':
                if (listOfPhones.includes(modelPhone)) {
                    let indexToRemove = listOfPhones.indexOf(modelPhone);
                    listOfPhones.splice(indexToRemove, 1);
                }
                break;

            case 'Bonus phone':
                let [oldPhone, newPhone] = modelPhone.split(':');
                if (listOfPhones.includes(oldPhone)) {
                    let indexOldPhone = listOfPhones.indexOf(oldPhone);
                    listOfPhones.splice(indexOldPhone + 1, 0, newPhone);
                }
                break;

            case 'Last':
                if (listOfPhones.includes(modelPhone)) {
                    let phone = modelPhone;
                    let index = listOfPhones.indexOf(phone);
                    listOfPhones.splice(index, 1);
                    listOfPhones.push(phone);
                    break;
                }
        }
    }

    result = listOfPhones;
    console.log(result.join(', '));

}
phoneShop((["SamsungA50, MotorolaG5, IphoneSE",
    "Add - Iphone10",
    "Remove - IphoneSE",
    "End"])
)

phoneShop((["HuaweiP20, XiaomiNote",
    "Remove - Samsung",
    "Bonus phone - XiaomiNote:Iphone5",
    "End"])
)