function comments(arr) {
    const users = new Set();
    const articles = new Set();
    const comments = new Map(); // article -> array of {username, title, content}

    for (let line of arr) {
        if (line.startsWith('user ')) {
            const username = line.split('user ')[1];
            users.add(username);

        } else if (line.startsWith('article ')) {
            const articleName = line.split('article ')[1];
            articles.add(articleName);

        } else if (line.includes(' posts on ')) {
            const [userPart, rest] = line.split(' posts on ');
            const [articlePart, commentPart] = rest.split(': ');
            const [title, content] = commentPart.split(', ');

            const username = userPart;
            const articleName = articlePart;

            if (users.has(username) && articles.has(articleName)) {
                if (!comments.has(articleName)) {
                    comments.set(articleName, []);
                }

                comments.get(articleName).push({
                    username,
                    title,
                    content
                });
            }
        }
    }

    // Сортиране на артиклите по брой коментари в низходящ ред
    const sortedArticles = [...comments.entries()]
        .sort((a, b) => b[1].length - a[1].length);

    for (let [article, articleComments] of sortedArticles) {
        console.log(`Comments on ${article}`);
        const sortedByUser = [...articleComments].sort((a, b) => a.username.localeCompare(b.username));

        for (let comment of sortedByUser) {
            console.log(`--- From user ${comment.username}: ${comment.title} - ${comment.content}`);
        }
    }
}
comments(['user aUser123', 
    'someUser posts onsomeArticle: NoTitle,stupidComment', 
    'article Books',

'article Movies', 
'articleShopping', 
'user someUser', 'useruSeR4', 
'user lastUser', 'uSeR4posts on Books: I like books, I doreally like them', 
'uSeR4 posts onMovies: I also like movies, I reallydo', 'someUser posts on Shopping:title, I go shopping every day',

'someUser posts on Movies: Like, Ialso like movies very much'])