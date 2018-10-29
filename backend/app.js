const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Header', 'Origin, X-Requested,-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Mehtods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'asdhj4h',
      title: 'First server-side post',
      content: 'This is comming from the Server'
    },
    {
      id: 'fadf12421l',
      title: 'Second server-side post',
      content: 'This is comming from the Server'
    },
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;
