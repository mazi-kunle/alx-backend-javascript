const assert = require('assert');
const calculateNUmber = require('./0-calcul');

describe('Tests for calculateNumber', () => {
  it('Returns 6', () => {
    const result = calculateNUmber(2.5, 3);
    assert.strictEqual(result, 6);
  });
  it('Returns 5', () => {
    const result = calculateNUmber(1, 3.7);
    assert.strictEqual(result, 5);
  });
  it('Returns 6', () => {
    const result = calculateNUmber(1.5, 3.7);
    assert.strictEqual(result, 6);
  });
  it('Returns 4', () => {
    const result = calculateNUmber(1, 3);
    assert.strictEqual(result, 4);
  });
});
