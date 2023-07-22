interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string; 
}

const s1: Student = {
  firstName: 'john',
  lastName: 'doe',
  age: 12,
  location: 'Nigeria',
}

const s2: Student = {
  firstName: 'joe',
  lastName: 'david',
  age: 44,
  location: 'Canada',
}

const studentsList = [s1, s2];

export const displayStudents = (students: Array<Student>): void => {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const headRow = document.createElement('tr');
  const tableBody = document.createElement('tbody');
  headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td');
  headRow.insertAdjacentHTML('beforeend', '<td>Location</td');
  tableHead.insertAdjacentElement('beforeend', headRow);

  for (const student of students) {
    const bodyRow = document.createElement('tr');
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    tableBody.insertAdjacentElement('beforeend', bodyRow);
  }

  table.insertAdjacentElement('beforeend', tableHead);
  table.insertAdjacentElement('beforeend', tableBody);
  document.body.insertAdjacentElement('beforeend', table);
};

displayStudents(studentsList);
document.title = 'Task 0';