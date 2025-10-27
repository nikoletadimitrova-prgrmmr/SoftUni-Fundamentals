function organizeShelves(input) {
    const shelves = new Map(); // shelfId -> { genre, books: [ {title, author} ] }

    for (let line of input) {
        if (line.includes('->')) {
            // "{shelf id} -> {shelf genre}"
            const [id, genre] = line.split(' -> ');
            if (!shelves.has(id)) {
                shelves.set(id, { genre, books: [] });
            }
        } else if (line.includes(':')) {
            // "{book title}: {book author}, {book genre}"
            const [title, rest] = line.split(': ');
            const [author, genre] = rest.split(', ');

            for (let [id, shelf] of shelves) {
                if (shelf.genre === genre) {
                    shelf.books.push({ title, author });
                    break; // add to only one shelf
                }
            }
        }
    }

    // Сортиране на рафтовете по брой книги в низходящ ред
    const sortedShelves = [...shelves.entries()]
        .sort((a, b) => b[1].books.length - a[1].books.length);

    for (let [id, shelf] of sortedShelves) {
        console.log(`${id} ${shelf.genre}: ${shelf.books.length}`);
        
        // Сортиране на книгите по заглавие (title)
        const sortedBooks = shelf.books.sort((a, b) => a.title.localeCompare(b.title));
        for (let book of sortedBooks) {
            console.log(`--> ${book.title}: ${book.author}`);
        }
    }
}
organizeShelves(['1 -> history', '1 -> action', 'Deathin Time: Criss Bell, mystery', '2 ->mystery', '3 -> sci-fi', 'Child ofSilver: Bruce Rich, mystery', 'HurtingSecrets: Dustin Bolt, action', 'Futureof Dawn: Aiden Rose, sci-fi', 'Lions andRats: Gabe Roads, history', '2 ->romance', 'Effect of the Void: Shay B,romance', 'Losing Dreams: Gail Starr,sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay,history'])