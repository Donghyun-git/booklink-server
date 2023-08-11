const mongoose = require('mongoose');

//[ 도서관 모델 ]
const { LibrarySchema } = require('../schemas/librarySchema');
const Library = mongoose.model('Library', LibrarySchema);

// [ 책 정보 모델 ]
const { BookSchema } = require('../schemas/bookSchema');
const Book = mongoose.model('Book', BookSchema);

module.exports = { Library, Book };
