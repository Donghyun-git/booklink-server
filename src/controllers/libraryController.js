const libraryService = require('../services/libraryService');
const { AppError } = require('../middlewares/errorHandler');

// [ 책으로 도서관 조회 ]
const getLibraries = async (req, res, next) => {
  const { isbn13 } = req.params;

  try {
    const { statusCode, message, data } = await libraryService.getLibraries(
      isbn13
    );

    if (statusCode !== 200) return next(new AppError(statusCode, message));

    res.status(200).json({ message, data });
  } catch (error) {
    throw new AppError(500, 'Internal Server Error');
  }
};

module.exports = { getLibraries };
