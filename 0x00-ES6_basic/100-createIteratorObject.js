export default function createIteratorObject(report) {
  const newArr = [];
  const array = Object.values(report.allEmployees);

  for (const innerArr of array) {
    for (const i of innerArr) {
      newArr.push(i);
    }
  }

  return newArr;
}
