module.exports = function (migration) {

    const blogPost = migration.editContentType('blogPost');

    blogPost.createField('blogAuthor')
        .name('Blog author')
        .type('Link')
        .linkType('Entry')
        .validations([
            {
                "linkContentType": ['author']
            }
        ]);

    blogPost.moveField('blogAuthor').afterField('title');


// Derives author first name and last name based on the existing author field, and link these back to blog post entries.
migration.deriveLinkedEntries({
    // Start from blog post's author field
    contentType: 'blogPost',
    from: ['author', 'title'],
    // This is the field we created above, which will hold the link to the derived category entries.
    toReferenceField: 'blogAuthor',
    // The new entries to create are of type 'name', 'firstName' and 'lastName'.
    derivedContentType: 'author',

    derivedFields: ['name', 'firstName', 'lastName'],
    identityKey: async (from) => {
        // The blog post title will be used as an identity key.
        return from.title['en-US'].toLowerCase().replace(/\s+/g, '-');
    },
    deriveEntryForLocale: async (from, locale) => {

        const name = from.author[locale];
        const [firstName, lastName] = from.author[locale].split(' ');
        return {
            name,
            firstName,
            lastName
        }
    }
})

// Disable the old field for now so editors will not see it.
blogPost.editField('author').disabled(true)
}
