### To run Fergus Technical Test

- npm i && npm run dev
- Mock database is present in server/db/dev.sqlite3. Do not need to run any additional commands.
- Server route is located at localhost:3000/


### To reset database, do the following in CLI:
- npm run knex migrate:latest
- npm run knex seed:run
