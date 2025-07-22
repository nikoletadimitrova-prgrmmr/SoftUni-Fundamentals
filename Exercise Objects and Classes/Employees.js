function employees(arr){
    for(let i = 0; i < arr.length; i++) {
        let size = Object.keys(arr[i]).length;
        let name = arr[i];
        console.log(`Name: ${name} -- Personal Number: ${size}`);
    }
 
}
employees([

'Silas Butler',

'Adnaan Buckley',

'Juan Peterson',

'Brendan Villarreal'

])