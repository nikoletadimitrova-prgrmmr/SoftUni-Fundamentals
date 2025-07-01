function heartDelivery(arr) {
    let houses = arr.shift().split('@').map(Number);
    
    let currentPosition = 0; 
    
    let command = arr.shift(); 
    
    while (command !== "Love!") {
    
        let length = Number(command.split(' ')[1]);
        

        currentPosition += length;
        
   
        if (currentPosition >= houses.length) {
            currentPosition = 0;
        }
        
       
        if (houses[currentPosition] > 0) {
            houses[currentPosition] -= 2;
            if (houses[currentPosition] === 0) {
                console.log(`Place ${currentPosition} has Valentine's day.`);
            }
        } else {
            console.log(`Place ${currentPosition} already had Valentine's day.`);
        }
        
   
        command = arr.shift();
    }
    
    
    console.log(`Cupid's last position was ${currentPosition}.`);
    
    
    let failedCount = houses.filter(x => x > 0).length;
    
    if (failedCount === 0) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${failedCount} places.`);
    }
}

heartDelivery((["10@10@10@2",

"Jump 1",

"Jump 2",

"Love!"]))