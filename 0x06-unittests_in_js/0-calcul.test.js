const assert = require('assert');
const calculateNUmber = require('./0-calcul');

describe('calculateNumber', () => {
  it('test when first num is rounded', () => {
    const result = calculateNUmber(2.5, 3);
    assert.strictEqual(result, 6);
  });
  it('test when second num is rounded', () => {
    const result = calculateNUmber(1, 3.7);
    assert.strictEqual(result, 5);
  });
  it('test when both numbers are rounded', () => {
    const result = calculateNUmber(1.5, 3.7);
    assert.strictEqual(result, 6);
  });
  it('test when both numbers are not rounded', () => {
    const result = calculateNUmber(1, 3);
    assert.strictEqual(result, 4);
  });
});
