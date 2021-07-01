
exports.up = function(knex) {
  return knex.schema
  .createTable('posts', tbl => {
      tbl.increments('post_id');
      tbl.string('post_title').notNullable().unique();
      tbl.string('post_content').notNullable().unique();
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('posts')
};
