function searchForANumber(arr, numbers) {

    let result = arr.slice(0, numbers[0]).slice(numbers[1]);

    let counting = result.filter(num => num === numbers[2]).length;

    console.log(`Number ${numbers[2]} occurs ${counting} times.`);

}
searchForANumber([5, 2, 3, 4, 1, 6],

    [5, 2, 3])