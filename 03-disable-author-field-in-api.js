module.exports = function (migration) {

 const blogPost = migration.editContentType('blogPost');

  // Disable the JSON response in the API
  blogPost.editField('author').omitted(true)
}
