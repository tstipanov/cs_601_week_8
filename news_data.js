const articles = [
    {
        name: {
            first: 'Andrew',
            last: 'Sheehan'
        },
        contact: {
            phones: [
                {
                    type: 'cell',
                    number: '123-455-1212'
                },
                {
                    type: 'home',
                    number: '111-222-3333'
                }
            ]
        },
        category: {
            type: 'Manager'
        }
    },
    {
        name: {
            first: 'Frank',
            last: 'Sheehan'
        },
        contact: {
            phones: [
                {
                    type: 'cell',
                    number: '222-3333-4444'
                },
                {
                    type: 'work',
                    number: '555-666-7777'
                }
            ]
        },
        category: {
            type: 'Architect'
        }
    },
    {
        name: {
            first: 'Martha',
            last: 'Stewart'
        },
        contact: {
            phones: [
                {
                    type: 'cell',
                    number: '123-456-7891'
                },
                {
                    type: 'work',
                    number: '999-999-9999'
                }
            ]
        },
        category: {
            type: 'Architect'
        }
    }
];


function findArticlesByAuthor(author) {
    let results = [];
    if (author === null) {
        return results;
    }
    articles.forEach(article => {
        if (article.name.last.toLowerCase().includes(author.toLowerCase())) {
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
