const assert = require('assert');
const calculateNumber = require('./0-calcul');

// describe('Tests for calculateNumber', () => {
//   it('Returns 6', () => {
//     assert.equal(calculateNumber(2.5, 3), 6);
//   });
//   it('Returns 5', () => {
//     assert.equal(calculateNumber(1, 3.7), 5);
//   });
//   it('Returns 6', () => {
//     assert.equal(calculateNumber(1.5, 3.7), 6);
//   });
//   it('Returns 4', () => {
//     assert.equal(calculateNumber(1, 3), 4);
//   });
// });
describe('Tests calculateNumber function:', () => {
  describe('Calculates two integers:', () => {
    it('Returns 4.', () => {
      assert.strictEqual(calculateNumber(1, 3), 4);
    });
  });
  describe('Calculates one float & one integer:', () => {
    it('Returns 5.', () => {
      assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
  });
  describe('Calculates one float & one integer (round down):', () => {
    it('Returns 4.', () => {
      assert.strictEqual(calculateNumber(1, 3.3), 4);
    });
  });
  describe('Calculates one float & one int reversed:', () => {
    it('Returns 5.', () => {
      assert.strictEqual(calculateNumber(3.7, 1), 5);
    });
  });
  describe('Calculates two floats:', () => {
    it('Returns 5.', () => {
      assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
  });
  describe('Calculates two floats w/borderline:', () => {
    it('Returns 6.', () => {
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
  });
});
