export default function cleanSet(cleanSetset, startString) {
  let finalStr = '';
  let flag = 0;
  if (!cleanSetset || !startString || !(cleanSetset instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  cleanSetset.forEach((element) => {
    if (element !== undefined) {
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
    }
  });
  return finalStr;
}
