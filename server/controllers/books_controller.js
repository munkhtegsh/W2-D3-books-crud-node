let books = [];
let id = 0;
let bc = {
    create: (req, res) => {
        let {title, author} = req.body //Don't forget to use req.body!!!;
        let book = {
            id,
            title,
            author
        };
        id++;
        books.push(book);
        res.status(200).send(books);
    },

    read: (req, res) => {
        res.status(200).send(books);
    },

    update: (req, res) => {
        let {author, title, id} = req.body;
        // console.log(author, title, id)
        books.forEach((book, i) => {
            
            if (req.body.id === book.id) {
                book.title = title;
                book.author = author;
            }
        });
        res.status(200).send(books)

    },

    delete: (req, res) => {
        let arr = books.filter((book, i) => {
            return +req.params.id !== book.id //req.params.id <= STRING!!!
        }
    );
        books = arr;
        res.status(200).send(books);
    }
}

module.exports = bc;


