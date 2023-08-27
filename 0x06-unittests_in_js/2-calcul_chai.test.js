const { expect } = require('chai');
const calculateNUmber = require('./1-calcul');

describe('Tests for calculateNumber', () => {
  it('Returns 6', () => {
    expect(calculateNUmber('SUM', 2.5, 3)).to.equal(6);
  });
  it('Returns -4', () => {
    expect(calculateNUmber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it('Returns 0.2', () => {
    expect(calculateNUmber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it('Returns Error', () => {
    expect(calculateNUmber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
