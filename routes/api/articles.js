const router = require('express').Router();
const articlesController = require('../../controllers/articlesController');

router.route('/')
    .get(articlesController.findAll)
    .post(articlesController.saveArticle);

router.route('/:id')
    .delete(articlesController.remove);

module.exports = router;

