/* eslint no-console: "off" */
const app = require('./lib/app');
const http = require('http');
const dbUri = 'mongodb://localhost:27017/gallery';

const connection = require('./lib/connect');
connection.connect(dbUri);

const server = http.createServer(app);
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log('server running on', server.address().port);
});