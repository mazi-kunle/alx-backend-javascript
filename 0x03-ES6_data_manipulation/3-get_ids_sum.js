export default function getStudentIdsSum(arr) {
  const newArr = arr.reduce(
    (a, b) => a + b.id, 0,
  );
  return newArr;
}
