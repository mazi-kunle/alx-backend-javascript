const assert = require('assert');
const calculateNUmber = require('./0-calcul');

describe('Tests for calculateNumber', () => {
  describe('test when first num is rounded', () => {
    it('Returns 6', () => {
      const result = calculateNUmber(2.5, 3);
      assert.strictEqual(result, 6);
    });
  });
  describe('test when second num is rounded', () => {
    it('Returns 5', () => {
      const result = calculateNUmber(1, 3.7);
      assert.strictEqual(result, 5);
    });
  });
  describe('test when both numbers are rounded', () => {
    it('Returns 6', () => {
      const result = calculateNUmber(1.5, 3.7);
      assert.strictEqual(result, 6);
    });
  });
  describe('test when both numbers are not rounded', () => {
    it('Returns 4', () => {
      const result = calculateNUmber(1, 3);
      assert.strictEqual(result, 4);
    });
  });
});
