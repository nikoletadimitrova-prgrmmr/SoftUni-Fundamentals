function adressBook(arr) {
    address = {};

    for(let el of arr) {
        [firstName, theAdress] = el.split(':');
        //console.log(firstName);
        
        address[firstName] = theAdress;
    }

    let sorted = Object.entries(address);
    sorted.sort((a,b) => a[0].localeCompare(b[0]));
    
    for(let [firstName, theAdress] of sorted) {
        console.log(`${firstName} -> ${theAdress}`);
    }
    
    
}
adressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])