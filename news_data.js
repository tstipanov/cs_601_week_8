const articles = [
    {
		caption: "Trump adopted by the Queen of Yorkshire",
		source: "Fox News",
		url: "http://www.foxnews.com",
		db_author: "Joe Mann",
		released: "2020-01-17 12:01:28 AM EST",
		story: "This is a really interesting story.  More to follow.."
	},
	{
		caption: "Dog for hire.  Solves crime and fluffy",
		source: "The Voxx",
		url: "https://www.washingtonpost.com/",
		db_author: "Mary Blige",
		released: "2019-11-17 8:21:01 PM EST",
		story: "Makes make hope that a dog can become President.  Hell, Trump can do it..."
    }
];


function findArticlesByAuthor(author) {
    let results = [];
    if (author === null) {
        return results;
    }
    articles.forEach(article => {
        if (article.db_author.toLowerCase().includes(author.toLowerCase())) {
            results.push(article);
        }
    });
    return results;
}


function findArticlesByKeyword(keyword) {
    let results = [];
    if (keyword === null) {
        return results;
    }
    articles.forEach(article => {
        if (article.name.last.toLowerCase().includes(keyword.toLowerCase())) {
            results.push(article);
        }
    });
    return results;
}

export {findArticlesByAuthor, findArticlesByKeyword};
