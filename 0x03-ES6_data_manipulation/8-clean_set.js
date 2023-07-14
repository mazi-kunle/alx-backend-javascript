export default function cleanSet(cleanSetset, startString) {
  let finalStr = '';
  let flag = 0;
  cleanSetset.forEach((element) => {
    const start = element.indexOf(startString);
    let subStr;
    if (start === 0 && startString !== '') {
      if (flag === 1) {
        finalStr = finalStr.concat('-');
      }
      const endIndex = startString.length;
      subStr = element.slice(endIndex);
      finalStr = finalStr.concat(subStr);
      flag = 1;
    }
  });
  return finalStr;
}
