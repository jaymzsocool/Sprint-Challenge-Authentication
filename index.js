const { server } = require('./server.js');
const db = require('./database/dbConfig');

server.get('/api/users', (req, res) => {    
  db('users')
      .select('id', 'username')
      .then(users => {
          res.json(users);
      })
      .catch(err => res.send(err));    
});

const port = process.env.PORT || 3300;
server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port}\n`);
});
