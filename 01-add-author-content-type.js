module.exports = function (migration) {
  // Create a new Blog author content type.
  const author = migration.createContentType('author').name('Author');
  author.createField('name').type('Symbol').name('Name');
  author.createField('firstName').type('Symbol').name('First name');
  author.createField('LastName').type('Symbol').name('Last name');
  author.createField('photo').type('Link').linkType('Asset').name('Photo');
  author.createField('bio').type('Text').name('Bio');
}
