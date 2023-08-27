function calculateNUmber(type, a, b) {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  if (type === 'DIVIDE') {
    const c = Math.round(a);
    const d = Math.round(b);

    return d !== 0 ? c / d : 'Error';
  }
  return 'Error';
}

module.exports = calculateNUmber;
