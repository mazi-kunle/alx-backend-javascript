import getListStudents from "./0-get_list_students.js";

export default function updateStudentGradeByCity(arr, city, newGrades) {
  const defaultGrade = { grade: 'N/A'};
  const newArr = arr
    .filter((x) => x.location === city)
    .map((x) => ({
      id: x.id,
      firstName: x.firstName,
      location: x.location,
      grade: (newGrades
        .filter((grade) => grade.studentId === x.id)[0]
        || defaultGrade).grade,
    }));
  return newArr;
}

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));
