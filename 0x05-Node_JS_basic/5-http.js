const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  let students;

  switch (req.url) {
    case '/':
      res.writeHead(200);
      res.end('Hello Holberton School!');
      break;
    case '/students':
      res.writeHead(200);
      res.write('This is the list of our students\n');
      students = countStudents(process.argv[2]);

      students
        .then((value) => {
          res.end(value.join('\n'));
        })
        .catch((err) => {
          res.end(err.message);
        });
      break;
    default:
      res.writeHead(404);
      res.write('Page not found');
      res.end();
  }
});

app.listen(port, hostname, () => {});

module.exports = app;
