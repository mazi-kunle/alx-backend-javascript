import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res, path) {
    let msg = 'This is the list of our students';
    readDatabase(path)
      .then((value) => {
        const response = [];

        response.push(msg);
        Object.keys(value).forEach((data) => {
          msg = `Number of students in ${data}: ${value[data].length}. List: ${value[data].join(', ')}`;
          response.push(msg);
        });
        res.status(200).send(`${response.join('\n')}`);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }

  static getAllStudentsByMajor(req, res, path) {
    res.status(200);
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(path)
      .then((value) => {
        res.status(200).send(`List: ${value[major].join(', ')}`);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }
}

export default StudentsController;
