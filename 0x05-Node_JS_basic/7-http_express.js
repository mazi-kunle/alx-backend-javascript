const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\nadan');
});

app.get('/students', (req, res) => {
  res.type('text/plain');
  const msg = 'This is the list of our students\n';
  const students = countStudents(process.argv[2]);
  students
    .then((value) => {
      res.send(`${msg}${value.join('\n')}`);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

app.listen(port, () => {});

module.exports = app;
