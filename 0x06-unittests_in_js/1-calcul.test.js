const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Tests for calculateNumber', () => {
  it('Returns 6', () => {
    assert.equal(calculateNumber('SUM', 2.5, 3), 6);
  });
  it('Returns -4', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('Returns 0.2', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('Returns Error', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
