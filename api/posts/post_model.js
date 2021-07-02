const db = require('../data/db_config');

const getPosts = async () => {
    return await db('posts');
}

module.exports = {
    getPosts,
}