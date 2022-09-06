exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('fruits')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('fruits').insert([
        {
          id: 1,
          name: 'Red fruit',
        },
        {
          id: 2,
          name: 'Blue fruit',
        },
        {
          id: 3,
          name: 'Yellow fruit',
        },
      ])
    })
}
