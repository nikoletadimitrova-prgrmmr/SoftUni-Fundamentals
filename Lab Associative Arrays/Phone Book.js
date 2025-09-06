function phoneBook(arr) {
    // for(let el of arr) {
    //     [firstName, phone] = el.split(' ');
    //     //console.log(firstName);
        
    //     console.log(`${firstName} -> ${phone}`);
        
    // }

    let phonebook = {};
    for(let line of arr) {
        [firstName, phone] = line.split(' ');
        //console.log(firstName);

        phonebook[firstName] = phone; 
        
    }

    for(let key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`);
    }
}
phoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])