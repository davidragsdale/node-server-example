export default (req, res) => {
  const payload = {
    userId: 1,
  };

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
  return res;
};
