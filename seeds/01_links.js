
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('link').del()
    .then(function () {
      // Inserts seed entries
      return knex('link').insert([
        {
            votes: 35,
            url: 'https://www.google.com',
            title: 'Yo, it\'s google'
        },
        {
            votes: 14,
            url: 'https://www.yahoo.com',
            title: 'Yo, it\'s yahoo'
        },
        {
            votes: 14,
            url: 'https://www.askjeeves.com',
            title: 'Yo, it\'s Jeeves!'
        }
      ]);
    });
};
