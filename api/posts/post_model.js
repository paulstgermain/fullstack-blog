const db = require('../data/db_config');

const getPosts = async () => {
    return await db('posts');
}

const insertPost = async (post) => {
    return await db('posts').insert(post);
}

module.exports = {
    getPosts,
    insertPost
}