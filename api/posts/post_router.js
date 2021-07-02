const router = require('express').Router();

const { getPosts } = require('./post_model');

router.get('/posts', (req, res) => {
    getPosts()
    .then(posts => {
        res.status(200).json(posts);
    })
    .catch(err => {
        res.status(500).json(err.message);
    })
});

module.exports = router;