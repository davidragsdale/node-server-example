import { URL } from 'url';

import * as routes from './routes/index.js';

export default (req, res) => {
  req.URL = new URL(req.url, `http://${req.headers.host}`);
  const handleRoute = (handler) => handler(req, res);

  switch (`${req.method}:${req.URL.pathname}`) {
    case 'GET:/hello': {
      handleRoute(routes.getHello);
    }
    default: {
      handleRoute(routes.notFound);
    }
  }
};
