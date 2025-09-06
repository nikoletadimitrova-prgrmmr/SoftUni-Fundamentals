function meetings(arr) {
    let meeting = {};

    for(let el of arr) {
        [day, firstName] = el.split(' ');
        //console.log(day);

        if(meeting.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        } else {
            meeting[day] = firstName;
            console.log(`Scheduled for ${day}`);
            
        }
        
    }

    for(let key in meeting) {
        console.log(`${key} -> ${meeting[key]}`);
        
    }
}
meetings(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])