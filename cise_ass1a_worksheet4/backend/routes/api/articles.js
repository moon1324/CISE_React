const express = require('express');
const router = express.Router();
const parser = require('body-parser');

// Load articles model
const Article = require('../../models/Articles');

// @route GET api/articles/test
// @description tests articles route
// @access Public
router.get('/test', (req, res) => res.send('article route testing!'));

// @route GET api/articles
// @description Get all articles
// @access Public
router.get('/', (req, res) => {
  Article.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(404).json({ noarticlesfound: 'No Articles found' }));
});

// @route GET api/articles/:id
// @description Get single articles by id
// @access Public
router.get('/:id', (req, res) => {
  Article.findById(req.params.id)
    .then(articles => res.json(articles))
    .catch(err => res.status(404).json({ noarticlesfound: 'No Articles found' }));
});

// @route GET api/articles
// @description add/save articles
// @access Public
router.post('/', parser.json(), (req, res) => {
  
  Article.create(req.body)
    .then(articles => res.json({ msg: 'articles added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this article' }));
});

// @route GET api/articles/:id
// @description Update articles
// @access Public
router.put('/:id', (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body)
    .then(articles => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/articles/:id
// @description Delete articles by id
// @access Public
router.delete('/:id', (req, res) => {
  Article.findByIdAndRemove(req.params.id, req.body)
    .then(articles => res.json({ mgs: 'articles entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such an articles' }));
});

module.exports = router;