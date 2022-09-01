const express = require('express');
const path = require('path');
const app = express();
// serve static files....
app.use(express.static(`${__dirname}/dist/app-routing-advanced`)); //ПУТЬ ПРИЛОЖЕНИЯ
// send all requests to index.html
app.get('/*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/dist/app-routing-advanced/index.html`)); // ПУТЬ index.html ПРИЛОЖЕНИЯ
});
// default Heroku PORT
app.listen(process.env.PORT || 3000);
