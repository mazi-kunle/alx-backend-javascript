export default function getStudentsByLocation(arr, city) {
  const newArr = arr.filter((x) => x.location === city);
  return newArr;
}
