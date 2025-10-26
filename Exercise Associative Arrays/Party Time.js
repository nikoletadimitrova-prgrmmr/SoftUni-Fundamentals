function partyTime(arr) {
    let currentGuest = arr.shift();
    let vip = [];
    let regular = [];

    while (currentGuest != "PARTY") {
        let isVIP = isNaN(currentGuest[0]);
        if (isVIP) {
            regular.push(currentGuest);
        }
        else {
            vip.push(currentGuest);
        }
        currentGuest = arr.shift();
    }

    let allGuests = vip.concat(regular);

    for (guest of arr) {
        allGuests.splice(allGuests.indexOf(guest), 1);
    }
    console.log(allGuests.length);
    allGuests.forEach(guest => {
        console.log(guest)
    })
}
partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'])