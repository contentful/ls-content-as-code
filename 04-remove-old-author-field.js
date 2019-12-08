module.exports = function (migration) {

    const blogPost = migration.editContentType('blogPost');

    // Remove the now obsolete field - assume the field has already been omitted
    blogPost.editField('author').deleted(true)
}
