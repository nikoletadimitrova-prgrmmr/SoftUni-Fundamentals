function songs(arr) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = arr[0];
    let last = arr.pop();

    let allSongs = [];

    for (let i = 1; i <= numberOfSongs; i++) {
        let [type, name, time] = arr[i].split('_');

        let song = new Song(type, name, time);

        allSongs.push(song)

        if (last !== 'all') {
            allSongs = allSongs.filter(s => s.type === last);

        }
    }
    let songsNames = allSongs.map(s => s.name);

    for (let songName of songsNames) {
        console.log(songName);

    }
}
songs([3,

    'favourite_DownTown_3:14',

    'favourite_Kiss_4:16',

    'favourite_Smooth Criminal_4:01',

    'favourite'])