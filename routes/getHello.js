export default (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world!');
  return res;
};
