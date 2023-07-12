export default function updateStudentGradeByCity(arr, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };
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
