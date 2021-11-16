var library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    }
];


const readableBooks = (library) => {
    let result = [];
    library.forEach((book) => {
        if (book.readingStatus === true) {
            result.push("Title:");
            result.push(book.title);
            result.push(".  Author:");
            result.push(book.author);
            result.push(".  Status:");
            result.push(book.readingStatus);
            result.push('\n');
        }
        
    });
    return result.join(" ");
}
console.log(readableBooks(library));
/**
 * Write a JavaScript function that receives the following library object as an
input and displays the books that can be read (the reading status is true).
Log the book name, author name and reading status
 *
 */