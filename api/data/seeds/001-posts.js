
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {post_title: 'Post Test One', post_content: '<p>This is just a <strong>test</strong>!</p>'},
        {post_title: 'Post Test 2', post_content: '<p>This is yet <b>another</b> test...</p><br><br><p>To ensure line breaks work.</p>'},
        {post_title: 'Post Test III', post_content: '<p>This is the most comprehensive test yet...</p> <br><br> <img src="https://i.pinimg.com/originals/c3/c6/fe/c3c6fea8bcfeb9197e0b8db8d243257c.jpg" /> <br><br> <p>Ensuring both images and line breaks work!</p>'}
      ]);
    });
};
