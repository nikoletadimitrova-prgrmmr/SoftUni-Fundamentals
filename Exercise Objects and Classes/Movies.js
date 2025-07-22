function movies(arr1) {
    let movies = [];

    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i].includes('addMovie ')){
            let nameOFMovie = arr1[i].replace('addMovie ', '');
            movies.push({ name: nameOFMovie });
        }

        if(arr1[i].includes('directedBy')){
            let [name, director] = arr1[i].split(' directedBy ');
            let movie = movies.find(element => element.name === name);
            if(movie) {
                 movie.director = director;
            }
            
        }

        if(arr1[i].includes('onDate')) {
            let [name, date] = arr1[i].split(' onDate ');
            let movie = movies.find(element => element.name === name);
            if(movie) {
                movie.date = date;
            }
        }
        
    }

    //console.log(movies);

    movies.forEach(movie => {
            if(movie.name && movie.date && movie.director) {
                console.log(JSON.stringify(movie))
            }
    })
    
}
movies([

'addMovie Fast and Furious',

'addMovie Godfather',

'Inception directedBy Christopher Nolan',

'Godfather directedBy Francis Ford Coppola', 

'Godfather onDate 29.07.2018',

'Fast and Furious onDate 30.07.2018',

'Batman onDate 01.08.2018',

'Fast and Furious directedBy Rob Cohen'

])