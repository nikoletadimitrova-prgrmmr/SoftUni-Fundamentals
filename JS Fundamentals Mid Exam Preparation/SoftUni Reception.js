function softUniReception(arr) {
    let array = arr.map(Number);
    let servedStudentForOneHour = (array[0] + array[1] + array[2]);
    let allStudents = array[3];

    let time = 0;

    while (allStudents > 0) {
            time ++

        if(time % 4 === 0) {
            continue;
        }

      allStudents -= servedStudentForOneHour;
    } 

    console.log(`Time needed: ${time}h.`);
}
softUniReception(['5', '6', '4', '20'])