'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  const user = req.get("x-dw-user");
  const email = req.get("email");
  const username = req.get("username");
  const token = req.get("x-datawiza-token-aad-access-token");
  if (user == 'true')
  {
    res.send('No-code SSO for a Node.js program by <a href="https://www.datawiza.com">Datawiza</a>.</br>\
    Welcome, ' + username + '!</br>\
    Email: ' + email + '</br>\
    Your Microsoft Azure AD access token: ' + token + '</br>\
    <a href="/ab-logout">Logout</a>');
  }
  else
  {
    res.send('No-code SSO for a Node.js program by <a href="https://www.datawiza.com">Datawiza</a>.</br>\
    User not found.</br>\
    You can see <a href="https://github.com/datawiza-inc/Azure-AD-SSO-NodeJS-App">here</a> how to use No-Code Datwiza to authenticate a Node.js app using Microsoft Azure AD.');
  }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
