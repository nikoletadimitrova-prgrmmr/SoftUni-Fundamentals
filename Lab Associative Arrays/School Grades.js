function schoolGrades(arr) {
    let map = new Map();
    let students = {};

    for(let el of arr) {
        [firstName, ...grades] = el.split(' ');
        grades = grades.map(Number);
        //console.log(grades);
        
        if (!students[firstName]) {
            students[firstName] = [];
        }
        students[firstName].push(...grades);
    }

    let sortedNames = Object.keys(students).sort((a, b) => a.localeCompare(b));


    for (let name of sortedNames) {
        let grades = students[name];
        let average = grades.reduce((a, b) => a + b, 0) / grades.length;
        console.log(`${name}: ${average.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',

'Tim 5 6',

'Tammy 2 4 3',

'Tim 6 6'])