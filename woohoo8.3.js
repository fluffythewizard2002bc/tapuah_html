const book1 = {
    name: "MineCraft",
    author: "Adolf Hitler",
    year: 1935
};

const book2 = {
    name: "Bible",
    author: "God",
    year: 5789
};

let bookUtils = {};

bookUtils.getFirstPublished = function (book1, book2) {
    return book1.year < book2.year ? book1 : book2;
};

bookUtils.setNewEdition = (book, editionYear) => {
    book.latestEdition = editionYear;
};

bookUtils.setLanguage = (book, language) => {
    book.language = language;
};

bookUtils.setTranslation = (book, language, translator) => {
    book.translation = {
        translator, language
    };
};

bookUtils.setPublisher = (book, name, location) => {
    book.publisher =
    {
        name, location
    };
};

bookUtils.isSamePublisher = (book1, book2) => {
    return(
        book1.publisher.name === book2.publisher.name &&
        book1.publisher.location === book2.publisher.location);
};