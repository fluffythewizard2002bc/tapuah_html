

const Book={
    genre:"comedy",
    author:"Clark Crusty",
    numberOfPages:550,
    weight:"550gr",
    headline:"Adolf's Adventures",
    year:1990
};
const book1=Object.create(Book);


function printBook(obj){
    console.log(`The Book `+obj.headline+` was written by `+obj.author+` in the year `+obj.year);
}
printBook(book1);
