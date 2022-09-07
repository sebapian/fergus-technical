exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('jobs')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('jobs').insert([
        {
          id: 12001,
          name: '89 Fergus Street - Plumbing',
          creation_date: '2022-07-27',
          due_date: '2022-08-06',
          status: 'Active',
          contact_name: 'Paul Walker',
          contact_detail: 'paul_walker@email.com',
          notes:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          id: 12002,
          name: '63 Symond Street - Busted generator',
          creation_date: '2022-07-15',
          due_date: '2022-07-20',
          status: 'Completed',
          contact_name: 'Dan Smith',
          contact_detail: 'dan_smith@email.com',
          notes:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          id: 12003,
          name: '22 Wingardium Palace - Fix Shower',
          creation_date: '2022-09-10',
          due_date: '2022-09-30',
          status: 'To price',
          contact_name: 'Lex Fridman',
          contact_detail: 'lex_fridman@email.com',
          notes:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
      ])
    })
}
