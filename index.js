const React = require('react');
const http = require('http');
const { renderToStaticMarkup } = require('react-dom/server');
const App = require('./App.js');

const handle = (req, res) => {
  res.write(`
  <html>
  <title> leako </title>
  ${renderToStaticMarkup(React.createElement(App))}
  </html>
  `);
  res.end();
}

const server = http.createServer(handle);
server.listen(4000, () => {
  console.log('Listening in', 4000);
});
