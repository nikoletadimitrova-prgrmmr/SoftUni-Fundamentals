function gramphone(band, album, song) {
    let timeOfFullRoutationOnPlate = 2.5;

    let durationOfSong = (album.length * band.length) * song.length / 2;

    let rotations = durationOfSong / timeOfFullRoutationOnPlate;

    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
    
}
gramphone('Black Sabbath', 'Paranoid',

'War Pigs')