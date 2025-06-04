function login (arr) {
    let correctPassword = arr[0];
    let reversePassword = correctPassword.split('').reverse().join('');
    let count = 0;
    
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] !== reversePassword) {
            count ++;
            
        
            if(count === 4) {
                console.log(`User ${correctPassword} blocked!`);
                break;
            }

            console.log('Incorrect password. Try again.');
        } else {
            console.log(`User ${correctPassword} logged in.`);
        } 
    }
}
login(['Acer','login','go','let me in','recA']);
