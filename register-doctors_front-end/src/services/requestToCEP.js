const request = (url) => fetch(url)
  .then((response) => response.json())
  .then((response) => response);

module.exports = request;
