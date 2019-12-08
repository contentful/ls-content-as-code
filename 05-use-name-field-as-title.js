module.exports = function (migration) {
    // Create a new Blog author content type.
    const author = migration.editContentType('author').displayField('name');
}
