const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    const db = {};
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const contents = data.toString().split('\n');

      for (let i = 1; i < contents.length; i += 1) {
        const field = contents[i].split(',');

        if (!(Object.hasOwn(db, field[3])) && field[3] !== undefined) {
          const temp = [field[0]];
          db[field[3]] = temp;
        } else if (field[3] !== undefined) {
          db[field[3]].push(field[0]);
        }
      }
      console.log(`Number of students: ${contents.length - 1}`);
      Object.keys(db).forEach((data) => {
        console.log(`Number of students in ${data}: ${db[data].length}. List: ${db[data].join(', ')}`);
      });

      resolve();
    });
  });
}

module.exports = countStudents;
