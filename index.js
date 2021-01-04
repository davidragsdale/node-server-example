import { URL } from 'url';

import * as routes from './routes/index.js';

export default (req, res) => {
  req.URL = new URL(req.url, `http://${req.headers.host}`);
  const handleRoute = (handler) => handler(req, res);

  switch (`${req.method}:${req.URL.pathname}`) {
    case 'GET:/file-stream': {
      handleRoute(routes.getFileStream);
      break;
    }
    case 'GET:/hello': {
      handleRoute(routes.getHello);
      break;
    }
    case 'GET:/payload': {
      handleRoute(routes.getPayload);
      break;
    }
    default: {
      handleRoute(routes.notFound);
    }
  }
};
