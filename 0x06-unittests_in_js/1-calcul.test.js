const assert = require('assert');
const calculateNUmber = require('./1-calcul');

describe('Tests for calculateNumber', () => {
  it('Returns 6', () => {
    assert.equal(calculateNUmber('SUM', 2.5, 3), 6);
  });
  it('Returns -4', () => {
    assert.equal(calculateNUmber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('Returns 0.2', () => {
    assert.equal(calculateNUmber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('Returns Error', () => {
    assert.equal(calculateNUmber('DIVIDE', 1.4, 0), 'Error');
  });
});
