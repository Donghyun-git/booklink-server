const { Router } = require('express');
const router = Router();
const libraryController = require('../controllers/libraryController');

router.get('/:isbn13', libraryController.getLibraries);

module.exports = router;
