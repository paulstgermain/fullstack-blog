const router = require('express').Router();

const { getPosts, insertPost } = require('./post_model');

router.get('/posts', (req, res) => {
    getPosts()
    .then(posts => {
        res.status(200).json(posts);
    })
    .catch(err => {
        res.status(500).json(err.message);
    })
});

router.post('/write', (req, res) => {
    insertPost(req.body)
    .then(added => {
        res.status(200).json('Post successful!');
    })
    .catch(err => {
        res.status(500).json(err.message);
    });
});

module.exports = router;