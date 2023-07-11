export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof (newName) !== 'string') {
      throw new Error('TypeError: Name must be a string');
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof (newLength) !== 'number') {
      throw new Error('TypeError: Length must be a number');
    }
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!(Array.isArray(newStudents))) {
      throw new Error('TypeError: Students must be an array of strings');
    } else if (!(newStudents.every((element) => typeof (element) === 'string'))) {
      throw new Error('TypeError: Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
