const { expect } = require('chai');
const calculateNUmber = require('./2-calcul_chai');

describe('Tests for calculateNumber', () => {
  describe('SUM first round', () => {
    it('Returns 6', () => {
      expect(calculateNUmber('SUM', 2.5, 3)).to.equal(6);
    });
  });
  describe('SUM second round', () => {
    it('Returns 5', () => {
      expect(calculateNUmber('SUM', 2, 3.4)).to.equal(5);
    });
  });
  describe('SUM no round', () => {
    it('Returns 2', () => {
      expect(calculateNUmber('SUM', 1, 1)).to.equal(2);
    });
  });
  describe('SUBTRACT both round', () => {
    it('Returns -4', () => {
      expect(calculateNUmber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });
  describe('DIVIDE both round', () => {
    it('Returns 0.2', () => {
      expect(calculateNUmber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
  });
  describe('DIVIDE fist round, second zero -> (returns error)', () => {
    it('Returns Error', () => {
      expect(calculateNUmber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
