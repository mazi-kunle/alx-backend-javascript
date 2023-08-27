const assert = require('assert');
const calculateNUmber = require('./0-calcul');

describe('Tests for calculateNumber', () => {
  it('Returns 6', () => {
    assert.equal(calculateNUmber(2.5, 3), 6);
  });
  it('Returns 5', () => {
    assert.equal(calculateNUmber(1, 3.7), 5);
  });
  it('Returns 6', () => {
    assert.equal(calculateNUmber(1.5, 3.7), 6);
  });
  it('Returns 4', () => {
    assert.equal(calculateNUmber(1, 3), 4);
  });
});
