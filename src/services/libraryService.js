const { Library, Book } = require('../models/model/index');
const { AppError } = require('../middlewares/errorHandler');

//[ 도서관 조회 ]
const getLibraries = async (isbn13) => {
  const formattedIsbn = parseInt(isbn13);
  try {
    const foundBook = await Book.find({ ISBN_THIRTEEN_NO: formattedIsbn });

    if (!foundBook || foundBook.length === 0)
      return new AppError(404, '도서관에 등록되지 않은 책입니다.');

    const libraries = [];

    for (const book of foundBook) {
      const { LBRRY_CD } = book;

      const foundLibraries = await Library.findOne({ LBRRY_CD });
      libraries.push(foundLibraries);
    }

    return { statusCode: 200, message: '조회성공', data: libraries };
  } catch (error) {
    return new AppError(500, 'Internal Server Error');
  }
};

module.exports = { getLibraries };
