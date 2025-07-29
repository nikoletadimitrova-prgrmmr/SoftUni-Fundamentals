function flightSchedule(arr1) {
    let flytghts = {};
    let flightsList = arr1[0];
    let changedStatuses = arr1[1];
    let checkStatus = arr1[2][0];

    for(let entry of flightsList) {
        let [flyNumber, ...destinationParts] = entry.split(' ');
        let destination = destinationParts.join(' ');
        flytghts[flyNumber] = {destination, status: 'Ready to fly'};
    }

    for(let entry of changedStatuses) {
        let [flyNumber, newStatus] = entry.split(' ');
        if(flytghts.hasOwnProperty(flyNumber)){
            flytghts[flyNumber].status = newStatus;
        }
    }

    if (checkStatus === 'Ready to fly') {
        for(let flyNumber in flytghts) {
            let wasChanged = changedStatuses.some(entry => entry.startsWith(flyNumber + ' '));
            if(flytghts[flyNumber].status === 'Ready to fly' && !wasChanged) {
                console.log(`{ Destination: '${flytghts[flyNumber].destination}', Status: '${flytghts[flyNumber].status}' }`);
            }
        }
    } else {
        for(let flyNumber in flytghts) {
            if(flytghts[flyNumber].status === checkStatus) {
                console.log(`{ Destination: '${flytghts[flyNumber].destination}', Status: '${flytghts[flyNumber].status}' }`);
            }
        }
    }
}
flightSchedule([['WN269 Delaware',

    'FL2269 Oregon',

    'WN498 Las Vegas',

    'WN3145 Ohio',

    'WN612 Alabama',

    'WN4010 New York',

    'WN1173 California',

    'DL2120 Texas',

    'KL5744 Illinois',

    'WN678 Pennsylvania'],

['DL2120 Cancelled',

    'WN612 Cancelled',

    'WN1173 Cancelled',

    'SK430 Cancelled'],

['Cancelled']

])