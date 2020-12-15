import http from 'http';

import app from './index.js';

const {
  PORT = 8080,
} = process.env;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`); // eslint-disable-line no-console
});
